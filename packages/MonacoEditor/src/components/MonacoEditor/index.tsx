import { emmetCSS, emmetHTML, emmetJSX } from 'emmet-monaco-es';
import { editor as monacoEditor } from 'monaco-editor';
import { nanoid } from 'nanoid';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Editor, loader, Monaco } from '@monaco-editor/react';
import Copy from '@savorui/copy';
import ErrorBoundary from '@savorui/error-boundary';

import { initTypescriptEditor } from './languages/typescript';
import { initYamlEditor, validateYaml } from './languages/yaml';
import { getFileExtensionByLanguage, hackWindowError } from './utils';

import type { Language } from './utils';

import type { EditorProps, OnMount } from '@monaco-editor/react';
import type { AutoCompletion, Diagnostics, IMarkerData } from './types';

loader.config({
  paths: {
    vs: 'https://unpkg.alibaba-inc.com/monaco-editor@0.51.0/min/vs',
  },
});

export interface CustomEditorProps {
  markers?: IMarkerData[];
  autoCompletion?: AutoCompletion;
  diagnostics?: Diagnostics;
  showCopy?: boolean;
  language?: Language | string;
  onCopy?: (text: string) => void;
}
export type TrefeMonacoEditorProps = EditorProps & CustomEditorProps;

const TrefeMonacoEditor: FC<TrefeMonacoEditorProps> = (props) => {
  const editorIdRef = useRef<string>(nanoid());
  const ext = getFileExtensionByLanguage(props.language as Language);

  const {
    defaultValue = '',
    height = '100%',
    theme = 'light',
    path = `${editorIdRef.current}.${ext}`,
    value,
    language = 'yaml',
    autoCompletion,
    diagnostics,
    markers,
    showCopy = true,
    options = {},
    onChange,
    onCopy,
    ...rest
  } = props;

  const [code, setCode] = useState(value || defaultValue);
  const [loading, setLoading] = useState(false);
  const [isEditorMounted, setIsEditorMounted] = useState(false);
  const monacoRef = useRef<Monaco>();
  // Note: 此处 editorRef 只能被定义为 any，无法继续明确类型
  const editorRef = useRef<monacoEditor.IStandaloneCodeEditor>();

  const isDarkTheme = theme.includes('dark');

  const onEditorMount: OnMount = useCallback(
    ( editor, monaco ) => {

      if (!monaco) return;

      setIsEditorMounted(true);

      monacoRef.current = monaco;
      editorRef.current = editor;

      if (language === 'typescript') {
        initTypescriptEditor({ monaco });
      }

      if (language === 'yaml') {
        initYamlEditor({ monaco, editor, autoCompletion, diagnostics });
      }

      emmetHTML(monaco, ['html']);
      emmetCSS(monaco, ['css', 'less']);
      emmetJSX(monaco, ['typescript', 'javascript']);
    },
    [language, diagnostics],
  );

  useEffect(() => {
    // 延迟 1000ms 后显示加载中
    const timer = setTimeout(() => {
      setLoading(true);
    }, 300);

    hackWindowError();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isEditorMounted) {
      validateYaml({
        monaco: monacoRef.current,
        editor: editorRef.current,
        language: language as Language,
        markers: markers || [],
        value: code,
        diagnostics: diagnostics,
      });
    }
  }, [isEditorMounted, language, markers, code, diagnostics, monacoRef.current, editorRef.current]);

  return (
    <ErrorBoundary>
      <div>modelId: {editorRef.current?.getModel()?.id}</div>
      <div
        className={`sa-relative ${isDarkTheme ? 'dark' : 'light'} sa-bg-background`}
        style={{ height }}
      >
        {showCopy && (
          <Copy
            className="sa-absolute sa-right-4 sa-top-2"
            text={code}
            theme={isDarkTheme ? 'dark' : 'light'}
            onCopy={onCopy}
          />
        )}
        <Editor
          height={height}
          defaultValue={defaultValue}
          value={value}
          // Note：多实例情况下，@monaco-editor/react 暂不支持多主题配置，https://github.com/microsoft/monaco-editor/issues/338#issuecomment-274837186
          theme={theme}
          path={path}
          language={language}
          loading={loading && <div className="sa-text-[13px] sa-text-foreground">加载中...</div>}
          options={{ minimap: { enabled: false }, ...options }}
          {...rest}
          onMount={onEditorMount}
          onChange={(value, ev) => {
            setCode(value || '');
            onChange?.(value, ev);

            validateYaml({
              monaco: monacoRef.current,
              editor: editorRef.current,
              language: language as Language,
              markers: markers || [],
              value: code,
              diagnostics: diagnostics,
            });
          }}
        />
      </div>
    </ErrorBoundary>
  );
};

export default TrefeMonacoEditor;
