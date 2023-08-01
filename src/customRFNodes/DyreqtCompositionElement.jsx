import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

import '../style/dyreqt-default-node.css'

const handleStyle = { left: 10 };

function DyreqtCompositionElement({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  let bgColor = 'gray';
  if (data?.color) {
    bgColor = data.color;
  }
  return (
    <div
        style={{
            backgroundColor: bgColor,
            borderColor: 'green solid 2px',
            borderRadius: '1rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            color: 'white',
        }}
        className="dyreqt-composition-node"
    >
        {/* <div className="dyreqt-composition-node-label">
            {data.id}
        </div> */}
        <div className="dyreqt-composition-node-label">
            {data.label}
        </div>
        <div className="dyreqt-composition-node-label">
            <span style={{fontWeight: 'bold'}}>CODE: </span> {data.code}
        </div>
        <div className="dyreqt-composition-node-label">
            <span style={{fontWeight: 'bold'}}>VERSION: </span>{data.code}
        </div>
        
        <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
        <Handle
            type="source"
            position={Position.Right}
            id="b" isConnectable={isConnectable}
        />
    </div>
  );
}

export default DyreqtCompositionElement;
