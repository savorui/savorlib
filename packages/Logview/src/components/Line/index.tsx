import './index.css';

import ansiHTML from 'ansi-html';
import { LegacyRef, memo, useCallback } from 'react';

import UnfoldIcon from '../../icons/Unfold';
import { getLineIndentation } from '../../utils/line';
import LineNumber from '../LineNumber';

import type { ParsedLog } from '../../types';

interface LineProps {
  measureElement: LegacyRef<HTMLDivElement>;
  virtualRowIndex: number;
  log: ParsedLog;
  isCurrentLine: boolean;
  isFolded: boolean;
  onFoldClick: (groupId: string) => void;
  onUnfoldClick: (groupId: string) => void;
  onClick?: (lineIndex: number) => void;
}

const INDENT_SPACE = 24;

function Line(props: LineProps) {
  const {
    measureElement,
    virtualRowIndex,
    log,
    isCurrentLine,
    isFolded,
    onFoldClick,
    onUnfoldClick,
    onClick,
  } = props;

  const indentation = getLineIndentation(log);
  const foldIconClassName = `sa-cursor-pointer w-[${INDENT_SPACE - 4}px] h-[${INDENT_SPACE - 4}px]`;
  const paddingLeft = indentation * INDENT_SPACE;

  let html: string;

  try {
    html = ansiHTML(log.detail);
  } catch (error) {
    html = log.detail;
  }

  const _onClick = useCallback(() => {
    onClick?.(virtualRowIndex);
  }, [onClick, virtualRowIndex])

  return (
    <div data-index={virtualRowIndex} ref={measureElement} onClick={_onClick}>
      <div
        className={`sa-flex sa-items-start sa-p-1 sa-gap-4 hover:sa-text-foreground 
          ${isCurrentLine ? 'current-log-line' : ''}`}
      >
        <LineNumber lineNo={log.index + 1} />
        <div className="sa-flex sa-justify-between sa-flex-1">
          <div
            className={`sa-flex sa-items-center sa-gap-2`}
            style={{
              paddingLeft: `${paddingLeft}px`,
            }}
          >
            {log.group?.isStart && (
              <div className="sa-flex sa-justify-center sa-items-center">
                {isFolded ? (
                  <UnfoldIcon
                    className={foldIconClassName}
                    onClick={() => {
                      onFoldClick(log.group?.id!);
                    }}
                  />
                ) : (
                  <UnfoldIcon
                    className={`-sa-rotate-90 ${foldIconClassName}`}
                    onClick={() => {
                      onUnfoldClick(log.group?.id!);
                    }}
                  />
                )}
              </div>
            )}
            <pre
              className={`sa-m-0 sa-p-0 sa-whitespace-pre-wrap sa-break-all`}
              dangerouslySetInnerHTML={{ __html: html }}
            ></pre>
          </div>
          {!!Number(log.group?.duration) && <span>{log.group?.duration}ms</span>}
        </div>
      </div>
    </div>
  );
}

export default memo(Line, (prevProps, nextProps) => {
  try {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  } catch (err) {
    console.error('Line memo diff', err);
    return false;
  }
});
