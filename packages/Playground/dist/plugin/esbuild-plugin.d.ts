import { Plugin } from 'esbuild-wasm';
interface MemoryFiles {
    [filePath: string]: string;
}
export declare const browserBuildPlugin: (files: MemoryFiles) => Plugin;
export {};
