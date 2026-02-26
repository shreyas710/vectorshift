// baseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ label, handles = [], children }) => {
    return (
        <div
            style={{
                width: 200,
                height: 80,
                border: '1px solid black',
            }}
        >
            {handles.map((handle) => (
                <Handle
                    type={handle.type}
                    position={handle.position ?? (handle.type === 'target' ? Position.Left : Position.Right)}
                    id={handle.id}
                />
            ))}

            <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>
                <span>{label}</span>
            </div>

            {children}
        </div>
    );
};
