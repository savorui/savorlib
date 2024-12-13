import { useDebounceFn } from 'ahooks';
import { useCallback, useState } from 'react';

import { ParsedLog } from '../../types';
import { searchByKeyword } from '../../utils/search';

interface UseSearchProps {
  parsedLogs: ParsedLog[];
}

export default function useSearch(props: UseSearchProps) {
  const { parsedLogs } = props;

  const [searchMatchedLogIndexs, setSearchMatchedLogIndexs] = useState<number[]>([]);
  const [highlightedLogs, setHighlightedLogs] = useState<ParsedLog[]>(parsedLogs);
  const [keyword, setKeyword] = useState('');

  const onSearch = useCallback(
    (_keyword: string) => {
      setKeyword(_keyword);

      const { matchedLogIndexs, highlightedLogs: _highlightedLogs } = searchByKeyword(
        _keyword,
        parsedLogs,
      );

      setSearchMatchedLogIndexs(matchedLogIndexs);
      setHighlightedLogs(_highlightedLogs);
    },
    [parsedLogs],
  );

  const { run: onDebounceSearch, cancel } = useDebounceFn(
    (_keyword: string) => {
      cancel();
      onSearch(_keyword);
    },
    { wait: 500 },
  );

  return {
    keyword,
    searchMatchedLogIndexs,
    highlightedLogs: highlightedLogs.length ? highlightedLogs : parsedLogs,
    onSearch,
    onDebounceSearch,
  };
}
