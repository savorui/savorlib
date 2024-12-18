import * as react_jsx_runtime from 'react/jsx-runtime';

type Language = 'typescript' | 'javascript' | 'yaml' | 'json' | 'html';
interface CodeBlockProps {
    className?: string;
    theme?: 'light' | 'dark';
    language?: Language;
    code: string;
    fileName?: string;
}
declare function CodeBlock({ className, theme, language, code, fileName, }: CodeBlockProps): react_jsx_runtime.JSX.Element;

export { CodeBlock as default };
