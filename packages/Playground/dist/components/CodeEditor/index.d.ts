import { CodeFiles } from '../../types/code-editor';
interface Props {
    plagroundId: string;
    files: CodeFiles;
    height?: string;
    onChange: (data: CodeFiles | string) => void;
}
export default function CodeEditor({ plagroundId, files, height, onChange, }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
