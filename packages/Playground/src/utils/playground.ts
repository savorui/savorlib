import { message } from "antd";

export const DEPENDENCIES_MAPPING: { [key: string]: string } = {
  react: "React",
  "react-dom": "ReactDOM",
  "react-dom/client": "ReactDOM",
  antd: "antd",
  dayjs: "dayjs",
  "@ant-design/icons": "icons",
  "@ali/matter": "Matter",
  "@ant-design/pro-components": "ProComponents",
  "@emotion/css": "emotion"
};

export const defaultFiles = {
  "./index.tsx": `
import { createRoot } from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('matter-playground-preview-id');
const root = createRoot(domNode);
root.render(<App />);`,
};

export const defaultAppCode = `
import React from 'react';

export default function App() {
  return <div>
    Hello World! 
    <br/>
    This is Matter UI.
  </div>;
}
`;

interface ExecCodeProps {
  code: string;
  playgroundId: string;
  onError?: (err: ErrorEvent) => void;
}

export const execCode = ({
  code,
  playgroundId,
  onError,
}: ExecCodeProps): void => {
  try {
    // Note: It seems not working, because different playground id generated every time
    const prevScript = document.body.querySelector(
      `script[data-playground-id="${playgroundId}"]`
    );
    if (prevScript) {
      prevScript.parentNode?.removeChild(prevScript);
    }

    const script = document.createElement("script");
    script.setAttribute("data-playground-id", playgroundId);
    script.type = "module";
    script.textContent = code;

    window.addEventListener("error", (err) => {
      if (err.error.stack.includes("at execCode")) {
        console.warn("[OlloPlayground] execCode error:", err);
        onError?.(err);
      }
    });

    document.body.appendChild(script);
  } catch (err: any) {
    console.error("[OlloPlayground] execCode error:", err);
    message.error(err.message);
  }
};
