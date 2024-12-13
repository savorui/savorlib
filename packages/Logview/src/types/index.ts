export interface ParsedLog {
  index: number;
  group:
    | {
        id: string; // current level group id
        parentChain: string[]; // parent group id chain
        isStart?: boolean;
        isEnd?: boolean;
        duration?: number;
      }
    | undefined;
  detail: string;
  isSearchMatched?: boolean;
}

export interface GroupDuration {
  startLineIndex: number;
  start: number;
  end?: number;
  diff?: number;
}

export type Theme = 'dark' | 'light';