import Ajv from 'ajv';
import jsYaml from 'js-yaml';
import YAML from 'yaml';

import {
  CompletionItem, DiagnosticSchema, IMarkerData, IStandaloneCodeEditor, MarkerSeverity
} from '../../../types';

import type { ErrorObject } from 'ajv';

const NumberRegex = /^\d+$/;
const ajv = new Ajv({ allErrors: true, verbose: true });

export enum ProblemType {
  missingProperty = 'missingProperty',
  typeMismatch = 'typeMismatch',
  constError = 'constError',
  oneOf = 'oneOf',
  anyOf = 'anyOf',
  additionalProperties = 'additionalProperties',
}

export const ProblemTypeMessages: Record<ProblemType, string> = {
  [ProblemType.missingProperty]: 'Missing property "{0}".',
  [ProblemType.typeMismatch]: 'Incorrect type. Expected "{0}".',
  [ProblemType.constError]: 'Value must be {0}.',
  [ProblemType.additionalProperties]: 'Property "{0}" is not allowed.',
  [ProblemType.oneOf]: 'Value must be one of {0}.',
  [ProblemType.anyOf]: 'Value must be any of {0}.',
};

export const isNumber = (value: string) => {
  return NumberRegex.test(value);
};

export const getAdditionalPropertiesNode = (
  node: YAML.YAMLMap<any, any> | null,
  error: ErrorObject,
) => {
  if (!node) return node;
  return node.items?.find((item: any) => item.key?.value === error.params.additionalProperty)?.key;
};

export const getErrorMessage = (error: ErrorObject) => {
  // 根路径的 oneOf 规则不做诊断
  if (error.schemaPath.startsWith('#/oneOf')) {
    return '';
  }

  switch (error.keyword) {
    case 'additionalProperties':
      return ProblemTypeMessages[ProblemType.additionalProperties].replace(
        '{0}',
        error.params.additionalProperty,
      );
    case 'required':
      return ProblemTypeMessages[ProblemType.missingProperty].replace(
        '{0}',
        error.params.missingProperty,
      );
    case 'type':
      return ProblemTypeMessages[ProblemType.typeMismatch].replace('{0}', error.params.type);
    case 'const':
      return ProblemTypeMessages[ProblemType.constError].replace('{0}', error.params.allowedValue);
    case 'enum':
      // enum 类型报错不做返回，因为会在 oneOf 类型中统一处理
      return '';
    case 'oneOf':
      return ProblemTypeMessages[ProblemType.oneOf].replace(
        '{0}',
        (error.schema as { enum: string[]; type: string }[])
          .map((item) => item.enum?.join(',') || item.type)
          ?.join(','),
      );
    case 'anyOf':
      return ProblemTypeMessages[ProblemType.anyOf].replace(
        '{0}',
        (error.schema as { enum: string[] | undefined }[])
          .map((item) => item.enum?.join(','))
          .join(','),
      );
    default:
      return error.message || 'Invalid YAML';
  }
};

/**
 * @param keyPath 示例："/overrides/0"
 */
export const getOffsetsByError = (yamlDocs: YAML.Document<any>, error: ErrorObject): number[] => {
  try {
    const keyPaths = error.instancePath.split('/').slice(1);

    let node: YAML.YAMLMap<any, any> | null = keyPaths.reduce((prev, current) => {
      if (isNumber(current)) {
        return prev?.items?.[current];
      }

      return prev?.items?.find((item: any) => item.key?.value === current)?.value;
    }, yamlDocs.contents);

    switch (error.keyword) {
      case 'additionalProperties':
        node = getAdditionalPropertiesNode(node, error);
        break;
    }

    return node?.range || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getPositionByOffset = (lineCounter: YAML.LineCounter, offsets: number[]) => {
  try {
    const [start = 0, end = 0] = offsets || [];

    const startPosition = lineCounter.linePos(start);
    const endPosition = lineCounter.linePos(end);

    return {
      startLineNumber: startPosition.line,
      startColumn: startPosition.col,
      endLineNumber: endPosition.line,
      endColumn: endPosition.col,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};

interface GetPositionByKeyPathProps {
  yamlDocs: YAML.Document<any>;
  error: ErrorObject;
  lineCounter: YAML.LineCounter;
}

export const getPositionByError = ({ yamlDocs, error, lineCounter }: GetPositionByKeyPathProps) => {
  const offsets = getOffsetsByError(yamlDocs, error);
  const position = getPositionByOffset(lineCounter, offsets);
  return position;
};

interface ValidateYamlBySchemaProps {
  code: string;
  schemas: DiagnosticSchema[];
}

export const validateYamlByJsYaml = (code: string) => {
  let _markers: IMarkerData[] = [];
  try {
    jsYaml.load(code);
    // 如果没有抛出任何错误，表示 YAML 合法
    // Note: 此处 err 只能被定义为 any，无法继续明确类型
  } catch (err: any) {
    // 获取错误信息并格式化为 Monaco 所需的标记格式
    _markers.push({
      startLineNumber: err.mark.line + 1, // +1 because Monaco is 1-based
      startColumn: err.mark.column + 1, // +1 because Monaco is 1-based
      endLineNumber: err.mark.line + 1,
      endColumn: err.mark.column + 1,
      message: err.reason,
      severity: MarkerSeverity.Error,
      source: 'YAML',
      code: err.name,
    });
  }

  return _markers;
};

export const validateYamlBySchema = ({ code, schemas }: ValidateYamlBySchemaProps) => {
  let _markers: IMarkerData[] = [];
  try {
    let errors: ErrorObject[] = [];

    const lineCounter = new YAML.LineCounter();

    const yamlDocs = YAML.parseDocument(code, { keepSourceTokens: true, lineCounter });

    const codeJson = yamlDocs.toJSON();

    schemas.forEach((schema) => {
      const validate = ajv.compile(schema);

      const isValid = validate(codeJson);

      if (!isValid) {
        errors = [...errors, ...(validate.errors ?? [])];
      }
    });

    // console.log('ajv errors', errors);

    errors.forEach((err) => {
      const position = getPositionByError({ yamlDocs, error: err, lineCounter });

      if (position) {
        _markers.push({
          ...position,
          message: getErrorMessage(err),
          severity: MarkerSeverity.Error,
          source: 'YAML',
          code: err.keyword,
        });
      }
    });
  } catch (err: any) {
    console.error('[validateYamlBySchema]', err);
    _markers.push({
      startLineNumber: 1,
      startColumn: 100,
      endLineNumber: 1,
      endColumn: 100,
      message: err.message,
      severity: MarkerSeverity.Error,
    });
  }

  return _markers;
};

export const getSchemaDefinitions = (schema: any): { [key: string]: any } => {
  try {
    let properties = { ...schema.properties };

    for (const key in schema.definitions) {
      properties = { ...properties, ...schema.definitions[key]?.properties };
    }
    return properties;
  } catch (err) {
    console.error('[getSchemaDefinitions]', err);
    return {};
  }
};

export const getJsonSchemaItemByKeyword = (schema: any, keyword: string) => {
  try {
    const properties = getSchemaDefinitions(schema);

    return properties[keyword];
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const toFirstLetterUpperCase = (text: string) => {
  if (!text) return '';
  return text[0]?.toUpperCase() + text.slice(1);
};

interface EnumItem {
  description: string;
  enum: string[];
}

interface SchemaItem {
  type?: 'string' | 'array' | 'boolean' | 'integer';
  description: string;
  default?: string | number | boolean;
  anyOf?: EnumItem[];
  oneOf?: EnumItem[];
}

export const getInsertText = (key: string, schemaItem: SchemaItem) => {
  try {
    switch (schemaItem?.type) {
      case 'string':
      case 'boolean':
      case 'integer':
      case undefined:
        return schemaItem.hasOwnProperty('default') ? `${key}: ${schemaItem.default}` : `${key}: `;
      case 'array':
        return `${key}: \n  -`;
      default:
        return `${key}: `;
    }
  } catch (err) {
    console.error(`[getInsertText]`, err);
    return `${key}: `;
  }
};

export const getCompletionItemsFromSchema = (schemas: DiagnosticSchema[] | undefined) => {
  if (!schemas) return [];

  const completionItems: CompletionItem[] = [];

  schemas.forEach((schema) => {
    const properties = getSchemaDefinitions(schema);
    console.log('--- properties ---', properties);

    Object.keys(properties).forEach((key) => {
      completionItems.push({
        label: key,
        insertText: getInsertText(key, properties[key]),
      });
    });
  });

  return completionItems;
};

export const ajustSuggestDomPosition = (editor: IStandaloneCodeEditor, lineNumber: number) => {
  const suggestWidgetDom: HTMLDivElement | null | undefined = editor
    .getDomNode()
    ?.querySelector('[widgetid="editor.widget.suggestWidget"]');

  // 如果 suggestWidget 组件存在且为隐藏，则更新 suggestWidget 组件位置
  if (editor && suggestWidgetDom && suggestWidgetDom.style.display !== 'none') {
    const currentLineTop: number = editor.getTopForLineNumber(lineNumber) - editor.getScrollTop();
    const suggestWidgetTop: number = parseFloat(suggestWidgetDom.style.top);
    const suggestWidgetHeight: number = parseFloat(suggestWidgetDom.style.height);

    console.log('suggestWidgetDom', suggestWidgetDom);
    console.log('suggestWidget Top', suggestWidgetTop, currentLineTop);
    console.log('suggestWidgetHeight', suggestWidgetHeight);

    // 只有当 suggest widget 的 top 没有严格在所在行上方时，才更新 suggestWidget 组件位置
    if (
      suggestWidgetTop >= currentLineTop ||
      suggestWidgetTop + suggestWidgetHeight < currentLineTop
    ) {
      const top = Math.max(currentLineTop - suggestWidgetHeight, 0);
      suggestWidgetDom.style.top = `${top}px`;
    }
  }
};
