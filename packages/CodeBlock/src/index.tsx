import './index.css';
import './highlight.css';

import hljs from 'highlight.js';
import { useEffect } from 'react';

import Copy from '@savorui/copy';
import ErrorBoundary from '@savorui/error-boundary';

import HtmlIcon from './icons/languages/HtmlIcon';
import JavaScriptIcon from './icons/languages/JavaScriptIcon';
import JsonIcon from './icons/languages/JsonIcon';
import TypeScriptIcon from './icons/languages/TypeScriptIcon';
import YamlIcon from './icons/languages/YamlIcon';
import { toFirstLetterUpperCase } from './utils/string';

type Language = 'typescript' | 'javascript' | 'yaml' | 'json' | 'html';

interface CodeBlockProps {
  className?: string;
  theme?: 'light' | 'dark';
  language?: Language;
  code: string;
  fileName?: string;
}

const getLanguageIcon = (language: Language) => {
  switch (language) {
    case 'html':
      return HtmlIcon;
    case 'json':
      return JsonIcon;
    case 'typescript':
      return TypeScriptIcon;
    case 'javascript':
      return JavaScriptIcon;
    case 'yaml':
      return YamlIcon;
    default:
      return TypeScriptIcon;
  }
};

function CodeBlock({
  className = '',
  theme = 'dark',
  language = 'typescript',
  code,
  fileName,
}: CodeBlockProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const IconComponent = getLanguageIcon(language);

  return (
    <div
      className={`savor-code-block sa-text-foreground sa-bg-background sa-rounded-[0.4rem] sa-overflow-x-auto savor-border ${theme} ${className}`}
    >
      <div className="sa-p-2 savor-border-b sa-flex sa-justify-between sa-items-center">
        <div className="sa-flex sa-gap-2 sa-items-center sa-text-muted-foreground">
          {<IconComponent className="sa-w-[1.1rem] sa-h-[1.1rem]" />}
          <span>{fileName}</span>
        </div>
        <div className="sa-flex sa-gap-2 sa-items-center sa-text-muted-foreground">
          {toFirstLetterUpperCase(language)}
          <Copy
            text={code}
            theme={theme}
            className="!sa-text-muted-foreground"
          />
        </div>
      </div>
      <div>
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default (props: CodeBlockProps) => {
  return (
    <ErrorBoundary>
      <CodeBlock {...props} />
    </ErrorBoundary>
  );
};
