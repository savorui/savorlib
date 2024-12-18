import type { EditorProps } from '../../types';

export function initTypescriptEditor({ monaco }: EditorProps) {
  // Important Bit #3: Tell typescript to use 'react' for jsx files.
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    jsx: monaco.languages.typescript.JsxEmit.Preserve,
    esModuleInterop: true,
    allowJs: true,
    checkJs: true,
  });

  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
    noSuggestionDiagnostics: false,
  });
}
