// toggleNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const ToggleNode = ({ id, data }) => {
  const [enabled, setEnabled] = useState(data?.enabled ?? false);

  const handles = [
    { id: `${id}-value`, type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode label="Toggle" handles={handles}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">State</span>
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-semibold ${enabled ? 'text-indigo-500' : 'text-slate-400'}`}>
            {enabled ? 'On' : 'Off'}
          </span>
          <button
            onClick={() => setEnabled(!enabled)}
            role="switch"
            aria-checked={enabled}
            className={`relative w-9 h-5 rounded-full border-none outline-none cursor-pointer transition-colors duration-200 shrink-0 ${enabled ? 'bg-indigo-500' : 'bg-slate-200'}`}
          >
            <div
              className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white shadow transition-all duration-200 ${enabled ? 'left-[19px]' : 'left-0.5'}`}
            />
          </button>
        </div>
      </div>
    </BaseNode>
  );
};
