import { useEffect, useState } from "react";
import esbuild from "esbuild-wasm";
import { execCode } from "../utils/playground";
import { browserBuildPlugin } from "../plugin/esbuild-plugin";
import { CodeFiles } from "../types/code-editor";
import { defaultFiles } from "../utils/playground";

let esbuildWasmInit: Promise<void>;

export default function usePlayground(
  code: string | undefined | null,
  files: CodeFiles | undefined | null,
  playgroundId: string,
  onError?: (err: ErrorEvent) => void
) {
  const [loading, setLoading] = useState(true);
  const [patchedFiles, setPatchedFiles] = useState<CodeFiles>();

  const initEsbuildWasm = async () => {
    if (!esbuildWasmInit) {
      try {
        esbuildWasmInit = esbuild.initialize({
          worker: true,
          wasmURL:
            "https://unpkg.alibaba-inc.com/esbuild-wasm@0.23.1/esbuild.wasm", // 指定 esbuild.wasm 文件的路径
        });
      } catch (err) {
        console.warn("esbuild.initialize error", err);
      }
    }

    await esbuildWasmInit;
  };

  const build = async (_files: CodeFiles) => {
    try {
      if (!_files || !_files["./App.tsx"]) return;

      await initEsbuildWasm();

      const result = await esbuild.build({
        entryPoints: ["./index.tsx"],
        bundle: true,
        write: false,
        plugins: [browserBuildPlugin(_files)],
        format: "esm",
      });

      const distCode = new TextDecoder().decode(result.outputFiles[0].contents);

      return distCode;
    } catch (err) {
      console.warn("[OlloPlayground] ESBUILD WASM ERROR:", err);
      return undefined;
    }
  };

  const runCode = (sourceCode: string | undefined) => {
    setLoading(false);
    if (!sourceCode) return;
    execCode({
      code: sourceCode,
      playgroundId,
      onError,
    });
  };

  const run = async (_files: CodeFiles | undefined) => {
    if (!_files) return;

    const _code = await build(_files);

    await runCode(_code);
  };

  useEffect(() => {
    let indexFileCode = defaultFiles["./index.tsx"];
    indexFileCode = indexFileCode.replace(
      "matter-playground-preview-id",
      `matter-playground-preview-${playgroundId}`
    );

    let _files;

    if (files) {
      _files = { ...files, "./index.tsx": indexFileCode };
    } else if (code) {
      _files = { "./index.tsx": indexFileCode, "./App.tsx": code };
    }

    setPatchedFiles(_files);
  }, [code, files]);

  useEffect(() => {
    run(patchedFiles);
  }, [patchedFiles]);

  return { loading, patchedFiles, setPatchedFiles };
}
