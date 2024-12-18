import prettier from 'prettier';
import yamlParser from 'prettier/plugins/yaml';

import { conf, language } from './config';
import {
  ajustSuggestDomPosition, getCompletionItemsFromSchema, getJsonSchemaItemByKeyword,
  toFirstLetterUpperCase, validateYamlByJsYaml, validateYamlBySchema
} from './utils';

import type { Language } from '../../utils';
import type {
  BaseEditorProps,
  IMarkerData,
  ITextModel,
  AutoCompletion,
  Diagnostics,
} from '../../types';

let currentModel: ITextModel | null;

export async function formatYAML(yamlString: string) {
  // 使用js-yaml格式化YAML
  try {
    return await prettier.format(yamlString, {
      parser: 'yaml',
      plugins: [yamlParser],
    });
  } catch (err) {
    console.log('format yaml error:', err);
    return yamlString; // 处理错误时返回原字符串
  }
}

type InitAutoCompletionProps = AutoCompletion & BaseEditorProps;

// 初始化自动补全设置
function initAutoCompletion({ monaco, editor, completionItems }: InitAutoCompletionProps) {
  if (!monaco || !editor) return;

  const rootTokenizer = language.tokenizer.root || [];
  language.tokenizer.root = [
    [
      /@?[a-zA-Z][\w$]*/,
      {
        cases: {
          '@keywords': 'keyword',
          '@default': 'variable',
        },
      },
    ],
    ...rootTokenizer,
  ];
  monaco.languages.setMonarchTokensProvider('yaml', { ...language });

  // 设置自动补全
  monaco.languages.registerCompletionItemProvider('yaml', {
    provideCompletionItems: (model, position) => {

      const thatModel = editor?.getModel();

      // editor 为配置的 editor，如果当前模型 id 和 editor 模型 id 不一致，则不触发自动补全，避免该方法中的逻辑在多实例场景被重复执行
      if (currentModel && thatModel?.id !== currentModel?.id) return;

      console.log('provideCompletionItems', currentModel?.id, thatModel?.id);

      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      const suggestions = completionItems.map((item) => {
        return {
          label: item.label,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: item.insertText,
          range,
        };
      });

      return {
        suggestions,
      };
    },
  });

  // 设置行内自动补全
  monaco.languages.registerInlineCompletionsProvider('yaml', {
    provideInlineCompletions: async function (model, position, context, token) {
      // 光标前输入的最后一个单词
      const word = model.getWordUntilPosition(position)?.word;

      // 光标前没有输入内容，不触发自动补全
      if (!word) return { items: [] };

      const matched = completionItems.find((item) => item.label.includes(word));

      if (matched) {
        return Promise.resolve({
          items: completionItems,
        });
      }

      return { items: [] };
    },
    freeInlineCompletions(arg) {},
  });

  // ALT + / 触发自动补全关键词显示
  editor?.addCommand(monaco.KeyMod.Alt | monaco.KeyCode.Slash, () => {

    // TODO: 需要定位为什么在多实例情况下，只有后一个实例才会触发此快捷键
    console.log('addCommad triggerSuggest', editor.getModel()?.id, currentModel?.id);

    if(currentModel && editor?.getModel()?.id !== currentModel?.id) return;

    editor.trigger('keyboard', 'editor.action.triggerSuggest', {});
  });

  // 监听光标位置变化以更新 suggest widget 位置
  editor?.onDidChangeCursorPosition((e) => {
    // 设置当前编辑中的 model，用于多实例场景的 model 区分
    currentModel = editor.getModel();

    console.log('onDidChangeCursorPosition', currentModel?.id, e);

    setTimeout(() => {
      ajustSuggestDomPosition(editor, e.position.lineNumber);
    }, 50);
  });
}

type InitYamlEditorProps = BaseEditorProps & {
  autoCompletion?: AutoCompletion;
  diagnostics?: Diagnostics;
};

export function initYamlEditor({
  monaco,
  editor,
  autoCompletion,
  diagnostics,
}: InitYamlEditorProps) {
  if (!monaco || !editor) return;

  const { completionItems } = autoCompletion || {};
  const { schemaName, schemaUrl, schemas } = diagnostics || {};

  monaco.languages.register({
    id: 'yaml',
    extensions: ['.yaml', '.yml'],
    aliases: ['YAML', 'yaml', 'YML', 'yml'],
    mimetypes: ['application/x-yaml'],
  });

  monaco.languages.setLanguageConfiguration('yaml', { ...conf });

  const model = editor?.getModel();

  model?.updateOptions({ tabSize: 2 });

  // FORMAT YAML
  monaco.languages.registerDocumentFormattingEditProvider('yaml', {
    displayName: 'yaml',

    async provideDocumentFormattingEdits(model) {
      return [
        {
          text: await formatYAML(model.getValue()), // put formatted text here
          range: model.getFullModelRange(),
        },
      ];
    },
  });

  const completionItemsFromSchema = getCompletionItemsFromSchema(schemas);

  console.log('completionItemsFromSchema', completionItemsFromSchema);

  const finalCompletionItems = [...(completionItems || []), ...completionItemsFromSchema];

  if (completionItems) {
    initAutoCompletion({ monaco, editor, completionItems: finalCompletionItems });
  }

  // Hover 后的语法提示
  monaco.languages.registerHoverProvider('yaml', {
    provideHover: function (model, position) {
      const thatModel = editor?.getModel();

      if (!currentModel) {
        currentModel = thatModel;
      }

      // editor 为配置的 editor，如果当前模型 id 和 editor 模型 id 不一致，则不触发自动补全，避免该方法中的逻辑在多实例场景被重复执行
      if (thatModel?.id !== currentModel?.id) return;

      const word = model.getWordAtPosition(position);

      if (!word) return;

      let matchedSchemaItem;

      if (schemas) {
        for (const schema of schemas) {
          matchedSchemaItem = getJsonSchemaItemByKeyword(schema, word.word);
          if (matchedSchemaItem) {
            break;
          }
        }
      }

      if (!matchedSchemaItem) return;

      const { type, description, oneOf, anyOf } = matchedSchemaItem || {};
      const allowValues = [...(oneOf || []), ...(anyOf || [])].reduce((acc, cur) => {
        return [...acc, ...(cur.enum || [])];
      }, [] as string[]);

      return {
        range: new monaco.Range(
          position.lineNumber,
          word.startColumn,
          position.lineNumber,
          word.endColumn,
        ),
        contents: [
          { value: `**${word.word}** ${toFirstLetterUpperCase(type)}` },
          { value: description },
          {
            value: allowValues.length
              ? `Allow values: ${allowValues.map((str: string) => `\n * \`${str}\``).join('')}`
              : '',
          },
          { value: `Source: [${schemaName}](${schemaUrl})` },
        ],
      };
    },
  });
}

type YamlValidateProps = BaseEditorProps & {
  value: string;
  language: Language;
  markers: IMarkerData[];
  diagnostics?: Diagnostics;
};

export const validateYaml = ({
  value,
  language,
  monaco,
  editor,
  markers,
  diagnostics,
}: YamlValidateProps) => {
  if (language !== 'yaml' || !monaco || !editor) return;

  let _markers = [...markers];

  const jsYamlMarkers = validateYamlByJsYaml(value) || [];

  _markers = [..._markers, ...jsYamlMarkers];

  if (diagnostics) {
    const schemaMarkers = validateYamlBySchema({ code: value, schemas: diagnostics.schemas });
    _markers = [..._markers, ...schemaMarkers];
  }

  const model = editor.getModel();
  // 设置模型标记
  model && monaco.editor.setModelMarkers(model, 'yaml', _markers);
};
