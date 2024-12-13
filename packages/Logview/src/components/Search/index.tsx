import { ArrowDownToLineIcon, ArrowUpToLineIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { ChangeEvent, KeyboardEvent, RefObject } from 'react';
interface SearchProps {
  className?: string;
  matchIndex?: number;
  matchCount?: number;
  // Used for keyboard shortcut
  getParentRef: () => RefObject<HTMLDivElement>;
  onChange?: (keyword: string) => void;
  onEnterPress?: (keyword: string) => void;
  scrollToPrev: () => void;
  scrollToNext: () => void;
}

export default function Search(props: SearchProps) {
  const {
    className = '',
    matchIndex = 0,
    matchCount = 0,
    onChange,
    onEnterPress,
    getParentRef,
    scrollToNext,
    scrollToPrev,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const parentRef = getParentRef();

  const [keyword, setKeyword] = useState('');

  const _onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setKeyword(e.target.value);
    },
    [onChange],
  );

  const _onEnterPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.type === 'keydown' && e.code === 'Enter') {
        onEnterPress?.(keyword);
      }
    },
    [keyword, onEnterPress],
  );

  const keydownListener = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      // Add Cmd/Ctrl+F shortcut
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.stopPropagation();
        e.preventDefault();
        console.log('Cmd/Ctrl + F was pressed');
        inputRef.current?.focus();
        inputRef.current?.select();
      }

      // Add Cmd/Ctrl+ArrowDown shortcut
      if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowDown') {
        e.stopPropagation();
        e.preventDefault();
        console.log('Cmd/Ctrl + ArrowDown was pressed');
        scrollToNext();
      }

      // Add Cmd/Ctrl+ArrowUp shortcut
      if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowUp') {
        e.stopPropagation();
        e.preventDefault();
        console.log('Cmd/Ctrl + ArrowUp was pressed');
        scrollToPrev();
      }
    },
    [parentRef?.current, scrollToNext, scrollToPrev],
  );

  useEffect(() => {
    // @ts-ignore Type definition misreported here
    parentRef?.current?.addEventListener('keydown', keydownListener);

    // @ts-ignore Type definition misreported here
    return () => parentRef?.current?.removeEventListener('keydown', keydownListener);
  }, [parentRef?.current, scrollToNext, scrollToPrev]);

  return (
    <div
      className={`sa-flex sa-gap-4 sa-items-center sa-bg-background/90 sa-p-1 sa-rounded-md ${className}`}
    >
      {!!keyword && (
        <span className="sa-text-sm sa-text-foreground/40 sa-flex sa-gap-1 sa-items-center">
          <span>{matchCount === 0 ? '0' : `${matchIndex + 1}/${matchCount}`}</span>
          <span>matches</span>
        </span>
      )}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="sa-bg-foreground/20 sa-text-foreground sa-border-0 sa-px-2 sa-py-1 sa-rounded-sm"
        onChange={_onChange}
        onKeyDown={_onEnterPress}
      />

      <div className="sa-flex sa-items-center sa-gap-2">
        <ArrowUpToLineIcon size={16} className="sa-cursor-pointer" onClick={scrollToPrev} />
        <ArrowDownToLineIcon size={16} className="sa-cursor-pointer" onClick={scrollToNext} />
      </div>
    </div>
  );
}
