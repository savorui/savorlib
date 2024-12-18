import { CodeFiles } from '../types/code-editor';
export default function usePlayground(code: string | undefined | null, files: CodeFiles | undefined | null, playgroundId: string): {
    loading: boolean;
    patchedFiles: CodeFiles | undefined;
    setPatchedFiles: import('react').Dispatch<import('react').SetStateAction<CodeFiles | undefined>>;
};
