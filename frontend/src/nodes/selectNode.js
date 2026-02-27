// selectNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const SelectNode = ({ id, data }) => {
  const [selected, setSelected] = useState(data?.selected || 'option1');

  const handles = [
    { id: `${id}-value`, type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode label="Select" handles={handles}>
      <div className="flex flex-col gap-0.5">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Option</label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full px-2 py-1 border border-slate-200 rounded-md text-xs text-slate-800 bg-slate-50 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors cursor-pointer"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </BaseNode>
  );
};
