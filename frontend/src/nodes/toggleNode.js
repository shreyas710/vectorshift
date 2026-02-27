// toggleNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const ToggleNode = ({ id, data }) => {
  const [enabled, setEnabled] = useState(data?.enabled ?? false);

  const handles = [
    { id: `${id}-value`, type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode label="Toggle" handles={handles}>
      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        {enabled ? ' On' : ' Off'}
      </label>
    </BaseNode>
  );
};
