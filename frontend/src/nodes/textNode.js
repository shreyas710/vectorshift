// textNode.js

import { useState, useEffect } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './baseNode';

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = [...new Set([...currText.matchAll(VAR_REGEX)].map((m) => m[1]))];

  const longestLine = currText.split('\n').reduce((max, line) => Math.max(max, line.length), 0);
  const nodeWidth = Math.max(220, longestLine * 7);
  const rows = currText.split('\n').length;

  useEffect(() => {
    updateNodeInternals(id);
  }, [id, currText, updateNodeInternals]);

  const handles = [
    { id: `${id}-output`, type: 'source', position: Position.Right },
    ...variables.map((varName, i) => ({
      id: `${id}-${varName}`,
      type: 'target',
      position: Position.Left,
      style: { top: `${((i + 1) / (variables.length + 1)) * 100}%` },
    })),
  ];

  return (
    <BaseNode label="Text" handles={handles} nodeWidth={nodeWidth}>
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Text</label>
        <textarea
          value={currText}
          rows={rows}
          onChange={(e) => setCurrText(e.target.value)}
          className="w-full px-2 py-1.5 border border-slate-200 rounded-md text-xs text-slate-800 bg-slate-50 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors resize-none font-sans leading-relaxed"
        />
        {variables.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-0.5">
            {variables.map((v) => (
              <span key={v} className="text-[9px] bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded font-mono font-semibold">{v}</span>
            ))}
          </div>
        )}
      </div>
    </BaseNode>
  );
};
