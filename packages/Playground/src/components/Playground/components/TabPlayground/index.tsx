import { ConfigProvider, Segmented } from 'antd';
import { useId, useRef, useState } from 'react';

import ErrorBoundary from '@savorui/error-boundary';

import { PlaygroundProps } from '../..';
import usePlayground from '../../../../hooks/usePlayground';
import { CodeFiles } from '../../../../types/code-editor';
import CodeEditor from '../../../CodeEditor';

function TabPlayground({ code = "", files }: PlaygroundProps) {
  const [showCode, setShowCode] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const playgroundId = useId();

  const { patchedFiles, setPatchedFiles } = usePlayground(
    code,
    files,
    playgroundId,
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 12,
        },
        components: {
          Tabs: {
            titleFontSize: 12,
          },
        },
      }}
    >
      <ErrorBoundary>
        <div className="mx-auto mt-6 rounded-md" ref={containerRef}>
          <div className="py-2 flex justify-between">
            <Segmented
              defaultValue="预览"
              value={showCode ? "源码" : "预览"}
              options={["预览", "源码"]}
              onChange={(value) => {
                if (value === "源码") {
                  setShowCode(true);
                } else {
                  setShowCode(false);
                }
              }}
            />
          </div>
          <div className="matter-border rounded-md mb-6">
            <div className={`${showCode ? "absolute -z-50 hidden" : ""}`}>
              <div
                id={`matter-playground-preview-${playgroundId}`}
                className={"mb-2 p-6"}
              />
            </div>
            {showCode ? (
              <div className="flex-1 p-2">
                {patchedFiles ? (
                  <CodeEditor
                    plagroundId={playgroundId}
                    files={patchedFiles}
                    onChange={(newFiles: CodeFiles | string) => {
                      setPatchedFiles(newFiles as CodeFiles);
                    }}
                  />
                ) : (
                  <div>No Code</div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </ErrorBoundary>
    </ConfigProvider>
  );
}

export default TabPlayground;
