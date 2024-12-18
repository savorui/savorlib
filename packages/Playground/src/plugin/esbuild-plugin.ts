import { Plugin } from "esbuild-wasm";
import { DEPENDENCIES_MAPPING } from "../utils/playground";

const DEP_REGEX = /^(\.\/[a-zA-Z0-9-_]+)(\.(tsx?))?$/;

interface MemoryFiles {
  [filePath: string]: string;
}

export const browserBuildPlugin = (files: MemoryFiles): Plugin => {
  return {
    name: "browser-build-plugin",
    setup(build) {
      // resolve files in memory
      build.onResolve({ filter: /^\.\/.+$/ }, (args) => {
        return { path: args.path, namespace: "memory" };
      });

      // Resolve dependencies
      build.onResolve({ filter: /.*/ }, (args) => {
        if (Object.keys(DEPENDENCIES_MAPPING).includes(args.path)) {
          return { path: args.path, namespace: "dependencies" };
        }

        return {
          path: args.path,
          namespace: "dependencies",
          external: true,
        };
      });

      // Load files in memory
      build.onLoad({ filter: /^\.\/.+$/ }, (args) => {
        const [, depPath, , suffix] = args?.path.match(DEP_REGEX) || [];

        const content = suffix
          ? files[args.path]
          : files[`${depPath}.tsx`] || files[`${depPath}.ts`];

        if (content !== undefined) {
          return {
            contents: content,
            loader: "tsx",
          };
        }

        return {
          contents: "",
          loader: "tsx",
        };
      });

      // Load dependencies
      build.onLoad({ filter: /.*/ }, (args) => {
        const { path } = args || {};

        if (Object.keys(DEPENDENCIES_MAPPING).includes(path)) {
          return {
            contents: `module.exports = ${DEPENDENCIES_MAPPING[path]}`,
          };
        }

        return {
          contents: "",
        };
      });
    },
  };
};
