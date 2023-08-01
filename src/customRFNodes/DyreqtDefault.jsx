import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

import '../style/dyreqt-default-node.css'

const handleStyle = { left: 10 };

function DyreqtDefault({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="dyreqt-default-node">
        <div className="dyreqt-default-node-label">
            {data.label}
        </div>
        <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
        <Handle
            type="source"
            position={Position.Bottom}
            id="b" isConnectable={isConnectable}
        />
    </div>
  );
}

export default DyreqtDefault;
