// noteNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';

export const NoteNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return (
    <BaseNode label="Note" handles={[]}>
      <div className="flex flex-col gap-0.5">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Content</label>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Write a note..."
          className="w-full px-2 py-1.5 border border-slate-200 rounded-md text-xs text-slate-800 bg-emerald-50 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-colors resize-y font-sans leading-relaxed min-h-[60px] placeholder:text-slate-400"
        />
      </div>
    </BaseNode>
  );
};
