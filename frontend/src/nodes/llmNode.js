// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const LLMNode = ({ id }) => {
  const handles = [
    { id: `${id}-system`, type: 'target', position: Position.Left, style: { top: `${100 / 3}%` } },
    { id: `${id}-prompt`, type: 'target', position: Position.Left, style: { top: `${200 / 3}%` } },
    { id: `${id}-response`, type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode label="LLM" handles={handles}>
      <div>
        <span className="text-[14px]">This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
