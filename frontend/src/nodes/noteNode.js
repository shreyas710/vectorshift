// noteNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';

export const NoteNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');

  return (
    <BaseNode label="Note" handles={[]}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note..."
        rows={3}
        style={{ width: '100%', resize: 'none', boxSizing: 'border-box' }}
      />
    </BaseNode>
  );
};
