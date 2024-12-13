import { useCallback, useEffect, useState } from 'react';

import { ParsedLog } from '../../types';
import useVirtualItemLogMapping from '../useVirtualItemLogMapping';

import type { KeyboardEvent, RefObject } from 'react';

interface GetLineIndexBySearchMatchProps {
  keyword: string;
  searchMatchedLogIndexs: number[];
  highlightedLogs: ParsedLog[];
  expandGroups: Set<string>;
  getParentRef: () => RefObject<HTMLDivElement>;
}

export default function useLine(props: GetLineIndexBySearchMatchProps) {
  const { keyword, searchMatchedLogIndexs, highlightedLogs, expandGroups, getParentRef } = props;

  const [logIndex, setLogIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [matchIndex, setMatchIndex] = useState(0);
  const [lineGroupChainIds, setLineGroupChainIds] = useState<string[]>();

  const parentRef = getParentRef();

  const updateLogGroupChainIds = useCallback(
    (logIndex: number) => {
      const log = highlightedLogs[logIndex];
      const groupChainIds = log?.group?.id
        ? [...(log?.group?.parentChain || []), log?.group?.id]
        : [...(log?.group?.parentChain || [])];
      setLineGroupChainIds(groupChainIds);
    },
    [highlightedLogs],
  );

  const { virtualItemIndexHighlightedLogIndexMapping, logIndexVirtualIndexMapping } =
    useVirtualItemLogMapping({
      highlightedLogs,
      expandGroups,
    });

  const virtualLineCount = virtualItemIndexHighlightedLogIndexMapping?.size || 0;

  useEffect(() => {
    const nextLineIndex = logIndexVirtualIndexMapping?.get(logIndex)!;

    setLineIndex(nextLineIndex);
  }, [logIndexVirtualIndexMapping, logIndex]);

  const updateLineState = useCallback(
    (nextMatchIndex: number) => {
      setMatchIndex(nextMatchIndex);

      const nextLogIndex = searchMatchedLogIndexs[nextMatchIndex]!;

      setLogIndex(nextLogIndex);

      updateLogGroupChainIds(nextLogIndex);
    },
    [searchMatchedLogIndexs],
  );

  const goNextSearchMathLine = useCallback(() => {
    try {
      // No search result matches
      if (!searchMatchedLogIndexs?.length) {
        setLineIndex(virtualLineCount);
      }

      let nextMatchIndex = matchIndex + 1;

      if (nextMatchIndex > searchMatchedLogIndexs.length - 1) {
        nextMatchIndex = 0;
      }

      updateLineState(nextMatchIndex);
    } catch (err) {
      console.error(err);
    }
  }, [matchIndex, searchMatchedLogIndexs, virtualLineCount]);

  const goPrevSearchMathLine = useCallback(() => {
    try {
      // No search result matches
      if (!searchMatchedLogIndexs?.length) {
        setLineIndex(0);
      }

      let nextMatchIndex = matchIndex - 1;

      if (nextMatchIndex < 0) {
        nextMatchIndex = searchMatchedLogIndexs.length - 1;
      }

      updateLineState(nextMatchIndex);
    } catch (err) {
      console.error(err);
    }
  }, [matchIndex, searchMatchedLogIndexs]);

  const goNextLine = useCallback(() => {
    let nextLineIndex = (lineIndex || 0) + 1;

    if (nextLineIndex > highlightedLogs.length - 1) {
      nextLineIndex = 0;
    }

    setLineIndex(nextLineIndex);
  }, [lineIndex, highlightedLogs.length]);

  const goPrevLine = useCallback(() => {
    let nextLineIndex = (lineIndex || 0) - 1;

    if (nextLineIndex < 0) {
      nextLineIndex = highlightedLogs.length;
    }

    setLineIndex(nextLineIndex);
  }, [lineIndex, highlightedLogs.length]);

  useEffect(() => {
    if (keyword) {
      setMatchIndex(-1);
      setLineIndex(0);
    }
  }, [keyword]);

  const keydownListener = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      // Add ArrowDown shortcut
      if (e.key === 'ArrowDown') {
        e.stopPropagation();
        e.preventDefault();
        console.log('ArrowDown was pressed');
        goNextLine();
      }

      // Add ArrowUp shortcut
      if (e.key === 'ArrowUp') {
        e.stopPropagation();
        e.preventDefault();
        console.log('ArrowUp was pressed');
        goPrevLine();
      }
    },
    [parentRef?.current, goNextLine, lineIndex, highlightedLogs.length],
  );

  useEffect(() => {
    // @ts-ignore Type definition misreported here
    parentRef?.current?.addEventListener('keydown', keydownListener);

    // @ts-ignore Type definition misreported here
    return () => parentRef?.current?.removeEventListener('keydown', keydownListener);
  }, [parentRef?.current, lineIndex]);

  return {
    lineIndex,
    lineGroupChainIds,
    matchIndex,
    virtualLineCount,
    virtualItemIndexHighlightedLogIndexMapping,
    goNextSearchMathLine,
    goPrevSearchMathLine,
    setLineIndex,
  };
}
