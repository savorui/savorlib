import { editor as monacoEditor } from 'monaco-editor';

import type { Monaco } from '@monaco-editor/react';

export type { IPosition } from 'monaco-editor';

export type IStandaloneCodeEditor = monacoEditor.IStandaloneCodeEditor;
export type ITextModel = monacoEditor.ITextModel;

export interface BaseEditorProps {
  monaco?: Monaco;
  editor?: IStandaloneCodeEditor;
}

export interface CompletionItem {
  label: string;
  insertText: string;
}

export interface AutoCompletion {
  completionItems: CompletionItem[];
}

export interface DiagnosticSchema {
  [key: string]: any;
}

export interface Diagnostics {
  schemaName?: string;
  schemaUrl?: string;
  schemas: DiagnosticSchema[];
}

export type IMarkerData = monacoEditor.IMarkerData;

export enum MarkerSeverity {
  Hint = 1,
  Info = 2,
  Warning = 4,
  Error = 8,
}
