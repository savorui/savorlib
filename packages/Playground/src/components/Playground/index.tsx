import PanelPlayground from "./components/PanelPlayground";
import TabPlayground from "./components/TabPlayground";
import { CodeFiles } from "@/types/code-editor";

/**
 * code or files, choose one
 */
export interface PlaygroundProps {
  type?: "tab" | "panel";
  code?: string;
  files?: { [filePath: string]: string };
  onChange?: (code: CodeFiles | string) => void;
}

export default function Playground(props: PlaygroundProps) {
  const { type = "tab", ...rest } = props || {};

  switch (type) {
    case "tab":
      return <TabPlayground {...rest} />;
    case "panel":
      return <PanelPlayground {...rest} />;
  }
}
