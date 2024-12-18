/**
 * code or files, choose one
 */
export interface PlaygroundProps {
    type?: "tab" | "col";
    code?: string;
    files?: {
        [filePath: string]: string;
    };
}
export default function Playground(props: PlaygroundProps): import("react/jsx-runtime").JSX.Element;
