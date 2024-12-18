import './index.css';

import { Tabs } from 'antd';
import { useState } from 'react';

import MonacoEditor from '@savorui/monaco-editor';

import { CodeFiles } from '../../types/code-editor';

interface Props {
  plagroundId: string;
  files: CodeFiles;
  height?: string;
  onChange: (data: CodeFiles) => void;
}

const APP_FILE_PATH = "./App.tsx";

export default function CodeEditor({
  plagroundId,
  files,
  height,
  onChange,
}: Props) {
  const [activeFilePath, setActiveFilePath] = useState("./App.tsx");

  if (!files) return null;

  const filteredFiles = Object.entries(files)
    .map(([filePath, fileCode]) => {
      return { filePath, fileCode };
    })
    .filter((item) => item.filePath !== "./index.tsx");

  const onCodeChange = (newCode: string | undefined, filePath: string) => {
    const newFiles: CodeFiles = {
      ...files,
      [filePath]: newCode || "",
    };
    onChange(newFiles);
  };

  return (
    <div className="ollo-code-editor overflow-hidden relative">
      {filteredFiles.length > 1 ? (
        <Tabs
          defaultActiveKey={activeFilePath}
          tabBarStyle={{ margin: 0 }}
          onChange={(activeKey: string) => {
            setActiveFilePath(activeKey);
          }}
          items={filteredFiles.map((item) => {
            const { filePath, fileCode } = item;
            const _filePath = filePath.slice(2);

            return {
              key: filePath,
              label: _filePath,
              children: (
                <MonacoEditor
                  path={_filePath}
                  value={fileCode}
                  height={height}
                  onChange={(newCode) => {
                    onCodeChange(newCode, filePath);
                  }}
                />
              ),
            };
          })}
        />
      ) : (
        <MonacoEditor
          path={`${plagroundId}/${APP_FILE_PATH.slice(2)}`}
          value={files[APP_FILE_PATH]}
          height={height}
          onChange={(newCode) => {
            onCodeChange(newCode, APP_FILE_PATH);
          }}
        />
      )}
    </div>
  );
}
