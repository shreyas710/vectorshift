// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    { id: `${id}-output`, type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode label="Text" handles={handles}>
      <div className="flex flex-col gap-0.5">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Text</label>
        <textarea
          value={currText}
          onChange={handleTextChange}
          className="w-full px-2 py-1.5 border border-slate-200 rounded-md text-xs text-slate-800 bg-slate-50 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors resize-y font-sans leading-relaxed min-h-[60px]"
        />
      </div>
    </BaseNode>
  );
};
