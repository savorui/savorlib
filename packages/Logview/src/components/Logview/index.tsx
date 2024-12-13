import { useEffect, useRef, useState } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

import useLine from '../../hooks/useLine';
import useSearch from '../../hooks/useSearch';
import { parseLogs } from '../../utils/log';
import Line from '../Line';
import Search from '../Search/index';

import type { ParsedLog, Theme } from '../../types';
export interface LogviewProps {
  logs: string[];
  theme?: Theme;
  width?: number | string;
  height?: number | string;
}

export default function Logview(props: LogviewProps) {
  const { logs, width = '100%', height = 600, theme = 'dark' } = props;

  const logContainerRef = useRef<HTMLDivElement>(null);
  const virtualContainerRef = useRef<HTMLDivElement>(null);

  const [parsedLogs, setParsedLogs] = useState<ParsedLog[]>([]);
  const [expandGroups, setExpandGroups] = useState<Set<string>>(new Set());

  useEffect(() => {
    const newParsedLogs = parseLogs(logs);
    setParsedLogs(newParsedLogs);
  }, [logs]);

  const { keyword, onDebounceSearch, searchMatchedLogIndexs, highlightedLogs } = useSearch({
    parsedLogs,
  });

  const {
    lineIndex,
    lineGroupChainIds,
    matchIndex,
    virtualLineCount,
    virtualItemIndexHighlightedLogIndexMapping,
    goNextSearchMathLine,
    goPrevSearchMathLine,
  } = useLine({
    keyword,
    searchMatchedLogIndexs,
    highlightedLogs,
    expandGroups,
    getParentRef: () => logContainerRef,
  });

  const virtualizer = useVirtualizer({
    count: virtualLineCount,
    getScrollElement: () => virtualContainerRef.current,
    estimateSize: () => 45,
    overscan: 80,
  });

  const virtualItems = virtualizer.getVirtualItems();

  useEffect(() => {
    virtualizer.scrollToIndex(lineIndex, { behavior: 'auto', align: 'center' });
  }, [lineIndex]);

  useEffect(() => {
    setExpandGroups((set) => {
      lineGroupChainIds?.forEach((id) => set.add(id));
      return new Set(set);
    });
  }, [lineGroupChainIds]);

  return (
    <div
      className={`sarvorui-logview-container sa-relative sa-bg-background sa-text-foreground/70 ${theme}`}
      style={{ width, height }}
      // [Important] Enable div to be focusable
      tabIndex={1}
      ref={logContainerRef}
    >
      <div className="sa-flex sa-items-center sa-gap-4 sa-absolute sa-top-2 sa-right-4 sa-z-10">
        <Search
          matchIndex={matchIndex}
          matchCount={searchMatchedLogIndexs.length}
          onChange={onDebounceSearch}
          onEnterPress={goNextSearchMathLine}
          getParentRef={() => logContainerRef}
          scrollToNext={goNextSearchMathLine}
          scrollToPrev={goPrevSearchMathLine}
        />
      </div>

      <div
        ref={virtualContainerRef}
        className={`sa-text-mono sa-overflow-y-auto sa-contain-strict sa-p-4 sa-box-border
        sa-text-xs sa-leading-relax sa-h-full sa-w-full`}
      >
        <div
          style={{
            height: virtualizer.getTotalSize(),
            width: '100%',
            position: 'relative',
          }}
        >
          <div
            className="absolute sa-top-0 sa-left-0 sa-w-full"
            style={{
              transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
            }}
          >
            {virtualItems.map((virtualRow) => {
              const highlightedIndex = virtualItemIndexHighlightedLogIndexMapping?.get(
                virtualRow.index,
              );
              const log = highlightedLogs[highlightedIndex!];

              if (!log) return null;

              return (
                <Line
                  key={virtualRow.key}
                  virtualRowIndex={virtualRow.index}
                  measureElement={virtualizer.measureElement}
                  log={log}
                  isCurrentLine={lineIndex === virtualRow.index}
                  isFolded={!!log.group?.id && expandGroups.has(log.group?.id)}
                  onFoldClick={(groupId) => {
                    setExpandGroups((set) => {
                      log.group && set.delete(groupId);
                      return new Set(set);
                    });
                  }}
                  onUnfoldClick={(groupId) => {
                    setExpandGroups((set) => {
                      log.group && set.add(groupId);
                      return new Set(set);
                    });
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
