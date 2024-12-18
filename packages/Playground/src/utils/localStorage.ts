import { CodeFiles } from "@/types/code-editor";

function safeSetLocalStorageItem(key: string, value: any) {
  try {
    const _value = typeof value === "string" ? value : JSON.stringify(value);
    window.localStorage.setItem(key, _value);
  } catch (err) {
    console.error(err);
  }
}

const LOCAL_KEYS = {
  PANEL_LAYOUT: "ollo_playground_panel_layout",
  PLAYGROUND_CODE_FILES: "ollo_playground_code_files",
};

type PanelLayoutType = "horizontal" | "vertical";

export function setPanelLayoutLocalStore(type: PanelLayoutType) {
  safeSetLocalStorageItem(LOCAL_KEYS.PANEL_LAYOUT, type);
}

export function getPanelLayoutLocalStore(): PanelLayoutType {
  return (window.localStorage.getItem(LOCAL_KEYS.PANEL_LAYOUT) ||
    "vertical") as PanelLayoutType;
}

export function setPlaygroundCodeFilesLocalStore(files: CodeFiles) {
  safeSetLocalStorageItem(LOCAL_KEYS.PLAYGROUND_CODE_FILES, files);
}

export function getPlaygroundCodeFilesLocalStore() {
  const str = window.localStorage.getItem(LOCAL_KEYS.PLAYGROUND_CODE_FILES);
  return str && JSON.parse(str);
}
