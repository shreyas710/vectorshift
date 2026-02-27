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
      <label>
        Option:
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
    </BaseNode>
  );
};
