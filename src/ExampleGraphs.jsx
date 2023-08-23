import React, { useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import TextUpdaterNode from './customRFNodes/TextUpdaterNode';
import DyreqtDefault from './customRFNodes/DyreqtDefault';
import DyreqtGroup from './customRFNodes/DyreqtGroup';
import DyreqtCompositionElement from './customRFNodes/DyreqtCompositionElement.jsx';
import RFCreator from './util/RFCreator';
import CompositionViewModel from './test_viewmodels/CompositionViewModel';
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
const missionView = createMissionGraphView();
const componentView = createComponentView();
  
function ExampleGraphs() {
  const [ viewSelection, setViewSelection ] = useState("MISSION_GRAPH_VIEW");
  const [ nodes, setNodes, onNodesChange ] = useNodesState(missionView.nodes)
  const [ edges, setEdges, onEdgesChange ] = useEdgesState(missionView.edges)


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
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
        }}
      >
      <button
        style={{
          top: '10px',
          left: '60px',
          width: '12rem',
          backgroundColor: '#88f'
        }}
        label="CYCLE VIEW"
        onClick={() => {
          console.log('blah')
          if (viewSelection === 'MISSION_GRAPH_VIEW')
          {
            setViewSelection('COMPOSITION_VIEW');
            setNodes(componentView.nodes);
            setEdges(componentView.edges);
          } else if (viewSelection === 'COMPOSITION_VIEW') {
            setViewSelection('MISSION_GRAPH_VIEW');
            setNodes(missionView.nodes);
            setEdges(missionView.edges);
          }
        }}
      >
        CYCLE VIEW
      </button>
        <span style={{
          paddingLeft: '2rem',
          color: '#88f',
          fontWeight: 'bold',
        }}>
          {viewSelection}
        </span>
      </div>
    </div>
  );
}

export default ExampleGraphs;
