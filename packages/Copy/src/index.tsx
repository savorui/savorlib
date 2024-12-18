import './index.css';

import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';

interface CopyProps {
  text: string;
  className?: string;
  theme?: 'light' | 'dark';
  onCopy?: (text: string) => void;
}

export function copy2Clipboard(text: string) {
  return navigator.clipboard.writeText(text);
}

export default function Copy({ className = '', text, theme = 'light', onCopy }: CopyProps) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      title="Copy"
      className={`sa-z-10 sa-p-1 sa-rounded-sm sa-text-xs sa-cursor-pointer sa-flex sa-w-fit sa-justify-center sa-items-center sa-text-foreground sa-bg-muted ${theme} ${className}`}
      onClick={() => {
        copy2Clipboard(text).then(() => {
          onCopy?.(text);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        });
      }}
    >
      <div className="sa-flex sa-items-center sa-gap-2">
        {copied ? (
          <CheckIcon size={14} />
        ) : (
          <CopyIcon className="sa-cursor-pointer hover:sa-scale-125" size={14} />
        )}
      </div>
    </div>
  );
}
