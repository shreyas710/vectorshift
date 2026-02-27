// commentNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const CommentNode = ({ id, data }) => {
  const [comment, setComment] = useState(data?.comment || '');

  const handles = [
    { id: `${id}-out`, type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode label="Comment" handles={handles}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        rows={3}
        style={{ width: '100%', resize: 'none', boxSizing: 'border-box' }}
      />
    </BaseNode>
  );
};
