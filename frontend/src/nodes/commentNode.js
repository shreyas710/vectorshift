// commentNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const CommentNode = ({ id, data }) => {
  const [comment, setComment] = useState(data?.comment || '');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  }

  const handles = [
    { id: `${id}-out`, type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode label="Comment" handles={handles}>
      <div className="flex flex-col gap-0.5">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Content</label>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          className="w-full px-2 py-1.5 border border-slate-200 rounded-md text-xs text-slate-800 bg-amber-50 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors resize-y font-sans leading-relaxed min-h-[60px] placeholder:text-slate-400"
        />
      </div>
    </BaseNode>
  );
};
