import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import TextUpdaterNode from './customRFNodes/TextUpdaterNode';
import DyreqtDefault from './customRFNodes/DyreqtDefault';
import DyreqtGroup from './customRFNodes/DyreqtGroup';
import DyreqtCompositionElement from './customRFNodes/DyreqtCompositionElement.jsx';
import RFCreator from './util/RFCreator';
import CompositionViewModel from '../src/test_viewmodels/CompositionViewModel';
import './style/text-updater-node.css';

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  dyreqtElement: DyreqtDefault,
  dyreqtGroup: DyreqtGroup,
  dyreqtCompositionElement: DyreqtCompositionElement,
};

const createMissionGraphView = () => {
  const nodes = RFCreator.createMissionGraphNodeViewModels();
  const edges = RFCreator.createMissionGraphEdgeViewModels();
  return {
    nodes,
    edges,
  }
}

const createComponentNodeViewModels = () => {
  const nodes = RFCreator.createCompositionNodeViewModels();
  return nodes;
}

const createComponentView = () => {
  const nodes = RFCreator.createCompositionNodeViewModels();
  const edges = RFCreator.createCompositionEdgeViewModels();
  return {
    nodes,
    edges
  }
}

function Flow() {
  // const { nodes, edges } = createMissionGraphView();
  const { nodes, edges } = createComponentView();
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
