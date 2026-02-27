// numberNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const NumberNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value ?? 0);

  const handles = [
    { id: `${id}-value`, type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode label="Number" handles={handles}>
      <div className="flex flex-col gap-0.5">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Value</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-2 py-1 border border-slate-200 rounded-md text-xs text-slate-800 bg-slate-50 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
        />
      </div>
    </BaseNode>
  );
};
