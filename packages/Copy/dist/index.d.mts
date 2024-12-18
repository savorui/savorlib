import * as react_jsx_runtime from 'react/jsx-runtime';

interface CopyProps {
    text: string;
    className?: string;
    theme?: 'light' | 'dark';
    onCopy?: (text: string) => void;
}
declare function copy2Clipboard(text: string): Promise<void>;
declare function Copy({ className, text, theme, onCopy }: CopyProps): react_jsx_runtime.JSX.Element;

export { copy2Clipboard, Copy as default };
