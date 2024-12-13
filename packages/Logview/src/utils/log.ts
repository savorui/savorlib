import type { ParsedLog, GroupDuration } from '../types';
import { isFoldedLine } from './line';

const GROUP_START = '::group::';
const GROUP_END = '::endgroup::';

const GROUP_START_REGEX = /^::group::([^:\n]*)(::([0-9]+))?$/;
const GROUP_END_REGEX = /^::endgroup::([0-9]+)?$/;

/**
 *  Grouping Log Detail Format Sample:
 *  '::group::this is log 4::1732772136198',
 *  'this is log 5',
 *  '::endgroup::1732772136291',
 */
export function parseLog(log: string) {
  try {
    if (log?.startsWith(GROUP_START)) {
      const [, detail, , start] = log.match(GROUP_START_REGEX) || [];

      return {
        isGroupStart: true,
        detail,
        duration: {
          start: Number(start),
        },
      };
    } else if (log?.startsWith(GROUP_END)) {
      const [, end] = log.match(GROUP_END_REGEX) || [];

      return {
        isGroupEnd: true,
        duration: {
          end: Number(end),
        },
      };
    }
  } catch (err) {
    console.error(err);
  }

  return {
    detail: log,
  };
}

export function parseLogs(logs: string[]): ParsedLog[] {
  const groupStack: string[] = [];
  let groupIndex = 0;

  const parsedLogs: ParsedLog[] = [];

  const groupDurationMap = new Map<string, GroupDuration>();

  logs.forEach((log, index) => {
    const { detail = '', isGroupStart, isGroupEnd, duration } = parseLog(log);

    if (isGroupStart) {
      groupStack.push(`${groupIndex++}`);
    }

    const currentGroupId = groupStack[groupStack.length - 1];

    if (isGroupStart && currentGroupId) {
      groupDurationMap.set(currentGroupId, { start: duration.start, startLineIndex: index });
    }

    const _log: ParsedLog = {
      index,
      group: currentGroupId
        ? {
            id: currentGroupId,
            parentChain: groupStack.slice(0, groupStack.length - 1),
          }
        : undefined,
      detail,
    };

    if (isGroupEnd && currentGroupId) {
      groupStack.pop();
      const _duration = groupDurationMap.get(currentGroupId);
      const diff = duration?.end - _duration?.start!;

      groupDurationMap.set(currentGroupId, {
        ..._duration!,
        end: duration?.end,
        diff,
      });

      // Update durtion of the start line in the group
      const starLine = parsedLogs[_duration!.startLineIndex]?.group;
      if (starLine) {
        starLine.duration = diff;
      }
    }

    if (_log.group) {
      _log.group.isStart = isGroupStart;
      _log.group.isEnd = isGroupEnd;
    }

    parsedLogs.push(_log);
  });

  return parsedLogs;
}

interface GetVirtualItemIndexLogMappingProps {
  highlightedLogs: ParsedLog[];
  expandGroups: Set<string>;
}

export function getVirtualItemIndexLogMapping(props: GetVirtualItemIndexLogMappingProps) {
  const { highlightedLogs, expandGroups } = props;
  const virtualIndexLogMap = new Map<number, number>();
  const logIndexVirtualIndexMap = new Map<number, number>();

  let virtualItemIndex = 0;

  highlightedLogs.forEach((log, index) => {
    if (!isFoldedLine(log, expandGroups)) {
      virtualIndexLogMap.set(virtualItemIndex, index);
      logIndexVirtualIndexMap.set(log.index, virtualItemIndex);
      virtualItemIndex++;
    }
  });

  return { virtualIndexLogMap, logIndexVirtualIndexMap };
}
