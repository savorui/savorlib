import './index.css';

import { Alert } from 'antd';
import {
  Columns2Icon, GripHorizontalIcon, GripVerticalIcon, Rows2Icon, SquareCodeIcon
} from 'lucide-react';
import { useCallback, useId, useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

import usePlayground from '@/hooks/usePlayground';
import {
  getPanelLayoutLocalStore, getPlaygroundCodeFilesLocalStore, setPanelLayoutLocalStore,
  setPlaygroundCodeFilesLocalStore
} from '@/utils/localStorage';
import ErrorBoundary from '@savorui/error-boundary';

import { PlaygroundProps } from '../..';
import { CodeFiles } from '../../../../types/code-editor';
import CodeEditor from '../../../CodeEditor';

export default function ColPlayground(props: PlaygroundProps) {
  const { code, files, onChange } = props;

  const [_files] = useState(getPlaygroundCodeFilesLocalStore() || files);
  const [direction, setDirection] = useState<"vertical" | "horizontal">(
    getPanelLayoutLocalStore()
  );
  const [err, setErr] = useState<ErrorEvent>();

  const playgroundId = useId();

  const onPlaygroundError = useCallback((err: ErrorEvent) => {
    setErr(err);
  }, []);

  const { patchedFiles, setPatchedFiles } = usePlayground(
    code,
    _files,
    playgroundId,
    onPlaygroundError
  );

  return (
    <ErrorBoundary>
      <div className="h-[100vh]">
        <PanelGroup direction={direction}>
          <Panel defaultSize={70}>
            <div
              id={`matter-playground-preview-${playgroundId}`}
              className="overflow-auto w-full h-full"
            />
          </Panel>
          <PanelResizeHandle
            className={`bg-slate-700 flex justify-center items-center z-[10001] ${direction === "vertical" ? "w-full h-3" : "h-full w-3"}`}
          >
            {direction === "vertical" ? (
              <GripHorizontalIcon className="h-3 text-slate-400" />
            ) : (
              <GripVerticalIcon className="w-3 text-slate-400" />
            )}
          </PanelResizeHandle>
          <Panel defaultSize={30} className="z-[10001] bg-stone-900 relative">
            <div className="bg-stone-900 flex justify-between text-slate-400 p-1">
              <div className="flex justify-center items-center gap-1 text-xs">
                <SquareCodeIcon size={14} />
                <span>CODE</span>
              </div>
              <div>
                {direction === "vertical" ? (
                  <Columns2Icon
                    size={14}
                    className="cursor-pointer"
                    onClick={() => {
                      setDirection("horizontal");
                      setPanelLayoutLocalStore("horizontal");
                    }}
                  />
                ) : (
                  <Rows2Icon
                    size={14}
                    className="cursor-pointer"
                    onClick={() => {
                      setDirection("vertical");
                      setPanelLayoutLocalStore("vertical");
                    }}
                  />
                )}
              </div>
            </div>
            <div>
              {patchedFiles ? (
                <CodeEditor
                  plagroundId={playgroundId}
                  files={patchedFiles}
                  onChange={(newFiles: CodeFiles) => {
                    setPatchedFiles(newFiles as CodeFiles);

                    onChange?.(newFiles);
                    // reset Error after code change
                    setErr(undefined);
                    setPlaygroundCodeFilesLocalStore(newFiles as CodeFiles);
                  }}
                />
              ) : (
                <div>No Code</div>
              )}
              {err?.message && (
                <Alert
                  className="absolute bottom-1 right-1 max-w-[90%]"
                  type="error"
                  closable
                  message={err?.message}
                  description={err?.error.stack}
                />
              )}
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </ErrorBoundary>
  );
}
