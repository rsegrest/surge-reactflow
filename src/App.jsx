import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import TextUpdaterNode from './customRFNodes/TextUpdaterNode';
import DyreqtDefault from './customRFNodes/DyreqtDefault';
import DyreqtGroup from './customRFNodes/DyreqtGroup';
import RFCreator from './util/RFCreator';

import './style/text-updater-node.css';

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  dyreqtElement: DyreqtDefault,
  dyreqtGroup: DyreqtGroup,
};

// const edges = [{
//   id: '1-2', source: '1', target: '2', label: 'to the',
//   type: 'step' }];

  const nodes = RFCreator.createMissionGraphNodeViewModels();
  const edges = RFCreator.createMissionGraphEdgeViewModels();
  
function Flow() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
