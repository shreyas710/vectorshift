// baseNode.js

import { Handle, Position } from 'reactflow';

const handleStyle = {
    width: 10,
    height: 10,
    background: '#6366f1',
    border: '2px solid #fff',
    boxShadow: '0 0 0 1px #6366f1',
};

export const BaseNode = ({ label, handles = [], children, nodeWidth }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-md min-h-[80px] font-sans" style={{ width: nodeWidth ?? 220 }}>
            {handles.map((handle) => (
                <Handle
                    type={handle.type}
                    position={handle.position ?? (handle.type === 'target' ? Position.Left : Position.Right)}
                    id={handle.id}
                    style={{ ...handleStyle, ...handle.style }}
                />
            ))}

            <div className="bg-gradient-to-br from-slate-800 to-slate-600 rounded-t-[9px] px-3 py-2 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                <span className="text-slate-100 text-[11px] font-semibold uppercase tracking-wider">{label}</span>
            </div>

            <div className="p-2.5">
                {children}
            </div>
        </div>
    );
};
