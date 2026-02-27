// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { id: `${id}-value`, type: 'target', position: Position.Left },
  ];

  return (
    <BaseNode label="Output" handles={handles}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-0.5">
          <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Name</label>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="w-full px-2 py-1 border border-slate-200 rounded-md text-xs text-slate-800 bg-slate-50 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Type</label>
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="w-full px-2 py-1 border border-slate-200 rounded-md text-xs text-slate-800 bg-slate-50 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors cursor-pointer"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
