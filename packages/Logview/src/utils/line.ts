import type { ParsedLog } from '../types';

/**
 * Determine whether the current row is in a collapsed state, with rows within the group (except for the first row) collapsed by default.
 */
export function isFoldedLine(log: ParsedLog, expandedGroups: Set<string>) {
  const { group: { id, parentChain = [], isStart } = {} } = log;

  // Not within any group, expand by default.
  if (!id) return false;

  const isParaentGroupFolded = parentChain.some((chainedId) => !expandedGroups.has(chainedId));

  // As long as there is one parent group collapsed, collapse it.
  if (isParaentGroupFolded) return true;

  // The starting row of the current group is not collapsed.
  if (isStart) return false;

  // Determine whether the current row is expanded.
  if (expandedGroups.has(id)) return false;

  // Other cases are collapsed by default.
  return true;
}

/**
 * Get line indentation in grouping log lines
 */
export function getLineIndentation(log: ParsedLog) {
  const isInGroup = !!log.group?.id;
  const isFirstLineInGroup = !!log.group?.isStart;
  const parentChainLen = log.group?.parentChain.length || 0;

  if (isInGroup) {
    if (isFirstLineInGroup) {
      return parentChainLen;
    }
    return parentChainLen + 1;
  }

  return 0;
}
