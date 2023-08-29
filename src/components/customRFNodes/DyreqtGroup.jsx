import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

import '../style/dyreqt-group-node.css'

const handleStyle = { left: 10 };

function DyreqtGroup({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  let style = {
    padding: '1rem',
    height: '100%',
  };
  if (data?.style) {
    style = {
        ...style,
        ...data.style
    }
  }
  return (
    <div
        className="dyreqt-group-node"
        style={style}
    >
        <div
            className="dyreqt-group-node-label"
            style={{
                verticalAlign: 'top',
                fontSize: '1.5rem',
                fontWeight: 'strong',
                color: 'black',
            }}
        >
            {data?.label}
        </div>
      {/* <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} /> */}
    </div>
  );
}

export default DyreqtGroup;
