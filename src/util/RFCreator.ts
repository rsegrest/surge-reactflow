import {
    MissionGraphViewModel as MissionGraphViewModel,
} from '../test_viewmodels/MissionGraphViewModel.ts';
import {
    CompositionViewModel as CompositionViewModel,
} from '../test_viewmodels/CompositionViewModel.ts';
import {
    Node,
    MarkerType,
    // Edge,
} from 'reactflow';

export interface groupdata {
    id: string;
    label: string;
    nodes: {
        id: string;
        label: string;
    }[];
    gridLayout?: {
        row: number;
        column: number;
        width: number;
        height: number;
    };
    data?: unknown;
}
export interface GridPosition {
    row:number;
    column:number;
}
export interface GridDimensions {
    width:number;
    height:number;
}
export interface GridLayout {
    row?: number;
    column?: number;
    width?: number;
    height?: number;
    gridPosition?: GridPosition;
    gridDimensions?: GridDimensions;
}
export interface initialNodeData {
    id?: string;
    label?: string;
    type?: string;
    gridLayout?:GridLayout;
    data?: {
        label?: string;
        gridLayout?: GridLayout;
    };
    position?: {
        x: number;
        y: number;
    };
    style?: unknown;
    parentNode?: string;
}

export type InitialEdgeData = [Node, Node] | [initialNodeData, initialNodeData];
export class RFCreator {

    static groups = [
        MissionGraphViewModel.Groups[0],
        MissionGraphViewModel.Groups[1],
    ]
    static group_1_nodes = [
        MissionGraphViewModel.Nodes[0],
        MissionGraphViewModel.Nodes[1],
        MissionGraphViewModel.Nodes[2],
    ]

    static group_2_nodes = [
        MissionGraphViewModel.Nodes[3],
        MissionGraphViewModel.Nodes[4],
        MissionGraphViewModel.Nodes[5],    
    ]

    // Mission Graph View -- edge connections
    static edge_data = [
        [MissionGraphViewModel.Nodes[0], MissionGraphViewModel.Nodes[1]],
        [MissionGraphViewModel.Nodes[1], MissionGraphViewModel.Nodes[2]],
        [MissionGraphViewModel.Nodes[3], MissionGraphViewModel.Nodes[4]],
        [MissionGraphViewModel.Nodes[4], MissionGraphViewModel.Nodes[5]],
        [MissionGraphViewModel.Nodes[2], MissionGraphViewModel.Nodes[6]],
        [MissionGraphViewModel.Nodes[5], MissionGraphViewModel.Nodes[6]],
        [MissionGraphViewModel.Nodes[6], MissionGraphViewModel.Nodes[7]],
        [MissionGraphViewModel.Nodes[7], MissionGraphViewModel.Nodes[8]],
        [MissionGraphViewModel.Nodes[7], MissionGraphViewModel.Nodes[9]],
        [MissionGraphViewModel.Nodes[9], MissionGraphViewModel.Nodes[10]],
        [MissionGraphViewModel.Nodes[11], MissionGraphViewModel.Nodes[12]],
        [MissionGraphViewModel.Nodes[12], MissionGraphViewModel.Nodes[13]],
        [MissionGraphViewModel.Nodes[13], MissionGraphViewModel.Nodes[14]],
        [MissionGraphViewModel.Nodes[14], MissionGraphViewModel.Nodes[15]],
        [MissionGraphViewModel.Nodes[15], MissionGraphViewModel.Nodes[16]],
        [MissionGraphViewModel.Nodes[17], MissionGraphViewModel.Nodes[18]],
        [MissionGraphViewModel.Nodes[18], MissionGraphViewModel.Nodes[19]],
        [MissionGraphViewModel.Nodes[16], MissionGraphViewModel.Nodes[20]],
        [MissionGraphViewModel.Nodes[19], MissionGraphViewModel.Nodes[20]],
        [MissionGraphViewModel.Nodes[20], MissionGraphViewModel.Nodes[21]],
        [MissionGraphViewModel.Nodes[21], MissionGraphViewModel.Nodes[22]],

        [MissionGraphViewModel.Nodes[23], MissionGraphViewModel.Nodes[24]],
        [MissionGraphViewModel.Nodes[24], MissionGraphViewModel.Nodes[25]],
        
        [MissionGraphViewModel.Nodes[22], MissionGraphViewModel.Nodes[26]],
        [MissionGraphViewModel.Nodes[25], MissionGraphViewModel.Nodes[26]],
    
        [MissionGraphViewModel.Nodes[26], MissionGraphViewModel.Nodes[27]],
        [MissionGraphViewModel.Nodes[27], MissionGraphViewModel.Nodes[28]],
    
        [MissionGraphViewModel.Nodes[29], MissionGraphViewModel.Nodes[30]],
        [MissionGraphViewModel.Nodes[30], MissionGraphViewModel.Nodes[31]],
    
        [MissionGraphViewModel.Nodes[28], MissionGraphViewModel.Nodes[32]],
        [MissionGraphViewModel.Nodes[31], MissionGraphViewModel.Nodes[32]],
    
        [MissionGraphViewModel.Nodes[32], MissionGraphViewModel.Nodes[33]],
        [MissionGraphViewModel.Nodes[33], MissionGraphViewModel.Nodes[34]],
        [MissionGraphViewModel.Nodes[34], MissionGraphViewModel.Nodes[35]],
    
    ];
    

    // Composition View -- edge connections
    static composition_edges:InitialEdgeData[] = [
        [CompositionViewModel.Nodes[0], CompositionViewModel.Nodes[1]],
        [CompositionViewModel.Nodes[0], CompositionViewModel.Nodes[2]],
        [CompositionViewModel.Nodes[0], CompositionViewModel.Nodes[3]],
        [CompositionViewModel.Nodes[1], CompositionViewModel.Nodes[4]],
        [CompositionViewModel.Nodes[1], CompositionViewModel.Nodes[5]],
        
        [CompositionViewModel.Nodes[3], CompositionViewModel.Nodes[6]],
        [CompositionViewModel.Nodes[3], CompositionViewModel.Nodes[7]],
        
        [CompositionViewModel.Nodes[6], CompositionViewModel.Nodes[8]],
        [CompositionViewModel.Nodes[7], CompositionViewModel.Nodes[9]],
        
    ]
    

    static translateGridToReactFlowSpace(
        nodes:initialNodeData[],
        layoutType:string = 'VERTICAL',
    ) {
        let X_TRANSLATE_IN_GROUP = 20;
        let Y_TRANSLATE_IN_GROUP = 75;
        let X_TRANSLATE = 160;
        let Y_TRANSLATE = 120;

        if (layoutType == 'HORIZONTAL') {
            Y_TRANSLATE += 80;
        }

        const updatedNodes = nodes.map(node => {
            const isChild = node.parentNode !== undefined;
            let gridLayout = null;
            if (node?.data?.gridLayout) {
                gridLayout = node.data.gridLayout;
            }
            
            let position; 
            if (gridLayout) {
                if (isChild) {
                    position = {
                        x: (gridLayout?.column as number) * X_TRANSLATE_IN_GROUP,
                        y: (gridLayout?.row as number) * Y_TRANSLATE_IN_GROUP,
                    }
                } else {
                    position = {
                        x: (gridLayout.column as number) * X_TRANSLATE,
                        y: (gridLayout.row as number) * Y_TRANSLATE,
                    };
                }
            }
            let data:initialNodeData|null = null;
            
            // if (node.type === 'dyreqtGroup' && gridLayout) {
            data = {
                ...node.data,
                id: node.id,
                style: {
                    boxSizing: 'border-box',
                    width: (gridLayout?.width as number) * 100,
                    height: (gridLayout?.height as number) * 100,
                },
            }
            node.data = data;
            if (position) {
                node = {
                    ...node,
                    type: node.type || 'dyreqtElement',
                    position: position || null,
                }
            }
            return node;
        });
        return updatedNodes;
    }
    static createMissionGraphEdgeViewModels() {
        const edges = this.formatEdges(
            this.edge_data as InitialEdgeData[]
        );
        return edges;
    }
    static getPosition(
        gridPosition:GridPosition|null = null
    ) {
        const X_TRANSLATE = 100;
        const Y_TRANSLATE = 100;
        if (gridPosition) {
            return {
                x: gridPosition.column * X_TRANSLATE,
                y: gridPosition.row * Y_TRANSLATE,
            }
        }
    }
    
    static getHLayoutPosition(
        gridPosition:GridPosition|null = null
    ) {
        const X_TRANSLATE = 180;
        const Y_TRANSLATE = 50;
        if (gridPosition) {
            return {
                x: gridPosition.column * X_TRANSLATE + 100,
                y: gridPosition.row * Y_TRANSLATE,
            }
        }
    }
    static formatNodes() {
        const nodes:initialNodeData[] = MissionGraphViewModel.Nodes;
        const formattedNodes = nodes.map((node) => {
            let data:{
                gridLayout?: GridLayout,
            } = {};

            if (node.data) {
                data = node.data;
            }
            let gridLayout = null;
            if (data.hasOwnProperty('gridLayout')) {
                gridLayout = data.gridLayout as GridLayout;
            }

            let gridPosition = {
                row: gridLayout?.row,
                column: gridLayout?.column}
            return {
                ...node,
                type: 'dyreqtElement',
                position: this.getPosition(gridPosition as GridPosition),
                style: {},
                data: {
                    ...data,
                    label: node.label as string,
                    gridLayout,
                }
            }
        })
        return formattedNodes;
    }

    static formatGroups() {
        const groups:groupdata[] = MissionGraphViewModel.Groups;
        const formattedGroups = groups.map(group => {
            let data = {};
            if (group.data) {
                data = group.data;
            }
            let gridLayout = null;
            if (group.gridLayout) {
                gridLayout = group.gridLayout;
            }

            return {
                ...group,
                type: 'dyreqtGroup',
                position: this.getPosition(gridLayout),
                style: {},
                data: {
                    ...data,
                    label: group.label,
                    gridLayout,
                }
            }
        })
        return formattedGroups;
    }

    static formatEdges(edgedata:InitialEdgeData[]) {
        let edges = edgedata.map((e) => {
            console.log(e)
            let edge = {
                source: "",
                target: "",
                id: "",
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    width: 20,
                    height: 20,
                    color: '#008',
                },
            };

            if (e[0].id) {
                edge.source = e[0].id.toString();
            }
            if (e[1].id) {
                edge.target = e[1].id.toString();
            }

            if (e[0].id && e[1].id) {
                edge.id = `e${e[0].id}-${e[1].id}`
            }
            return edge;
        })
        return edges;
    }
    static createMissionGraphNodeViewModels() {
        const groupNodes = this.formatGroups();
        const updatedGroupNodes = this.translateGridToReactFlowSpace(
            groupNodes as initialNodeData[]
        );
        const initialNodes = this.formatNodes();
        const updatedNodes = this.translateGridToReactFlowSpace(
            initialNodes as initialNodeData[]
        );
        const nodes = [
            ...updatedGroupNodes,
            ...updatedNodes
        ]
        return nodes;
    }
    static formatHorizontalLayoutNodes(nodes:initialNodeData[]) {
        const formattedNodes = nodes.map((node) => {
            let data:{
                gridLayout?: GridLayout,
            } = {};

            if (node.data) {
                data = node.data;
            }
            let gridLayout = null;
            if (data.hasOwnProperty('gridLayout')) {
                gridLayout = data.gridLayout as GridLayout;
            }

            let gridPosition = {
                row: gridLayout?.row,
                column: gridLayout?.column}
            return {
                ...node,
                type: 'dyreqtCompositionElement',
                position: this.getHLayoutPosition(gridPosition as GridPosition),
                style: {},
                data: {
                    ...data,
                    label: node.data?.label,
                    gridLayout,
                }
            }
        })
        return formattedNodes;
    }
    static createCompositionNodeViewModels() {
        const nodes:initialNodeData[] = CompositionViewModel.Nodes;

        const updatedNodes = this.formatHorizontalLayoutNodes(
            nodes as initialNodeData[],
        );
        return updatedNodes;
    }
    static createCompositionEdgeViewModels() {
        const edge_data = this.composition_edges;
        const formattedEdges = this.formatEdges(edge_data);
        return formattedEdges;
    }
}
export default RFCreator;
