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
      <label>
        Value:
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
