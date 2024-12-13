interface LineNumberProps {
  lineNo: number;
}

export default function LineNumber(props: LineNumberProps) {
  const { lineNo } = props;
  return (
    <div
      className={`sa-w-9 sa-shrink-0 sa-flex sa-justify-center sa-items-center sa-text-xs`}
    >
      <span className="sa-text-right sa-select-none">{lineNo}</span>
    </div>
  );
}
