import {
    MissionGraphViewModel as MissionGraphViewModel,
} from '../test_viewmodels/MissionGraphViewModel.ts';
import {
    Node,
    // Edge,
} from 'reactflow';

export interface groupdata {
    id: string;
    label: string;
    nodes: {
        id: string;
        label: string;
    }[];
    gridLayout: {
        row: number;
        column: number;
        width: number;
        height: number;
    };
    data?: {
        gridLayout?: GridLayout;
    };
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
    id: string;
    label: string;
    gridLayout?:GridLayout;
    data?:unknown;
}
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
    
    

    static translateGridToReactFlowSpace(nodes:Node[]) {
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
                        x: gridLayout.column * 20,
                        y: gridLayout.row * 75,
                    }
                } else {
                    position = {
                        x: gridLayout.column * 160,
                        y: gridLayout.row * 120,
                    };
                }
            }
            let data = null;
            
            if (node.type === 'dyreqtGroup' && gridLayout) {
                data = {
                    ...node.data,
                    id: node.id,
                    style: {
                        boxSizing: 'border-box',
                        width: gridLayout.width * 100,
                        height: gridLayout.height * 100,
                    }
                }
            } else {
                data = {
                    ...node.data,
                    id: node.id,
                    style: {}
                };
            }
            node.data = data;
            if (position) {
                node = {
                    ...node,
                    position,
                }
            }
            return node;
        });
        return updatedNodes;
    }
    static createMissionGraphEdgeViewModels() {
        const edges = this.formatEdges();
        console.log('EDGES (2):')
        console.log(edges);
        return edges;
    }
    static getPosition(
        gridPosition:GridPosition|null = null
    ) {
        if (gridPosition) {
            return {
                x: gridPosition.column * 100,
                y: gridPosition.row * 100,
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
                    label: node.label,
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
    static formatEdges() {
        let edges = this.edge_data.map((e) => {
            console.log(e)
            let edge = {
                source: "",
                target: "",
                id: "",
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
            groupNodes as Node[]
        );
        const initialNodes = this.formatNodes();
        const updatedNodes = this.translateGridToReactFlowSpace(
            initialNodes as Node[]
        );
        const nodes = [
            ...updatedGroupNodes,
            ...updatedNodes
        ]
        return nodes;
    }
}
export default RFCreator;


//     const nodes = [
    //     {
    //         id: 'G1',
    //         type: 'dyreqtGroup',
    //         position: { x: 0, y: 0 },
    //         style: {
    //             width: 500,
    //             height: 1000,
    //         },
    //         data: {
    //             label: 'Group 1',
    //             gridPosition: {
    //                 row: 1,
    //                 column: 1,
    //                 width: 4,
    //                 height: 4,
    //             }
    //         }
    //     },
    //     {
    //         id: 'A',
    //         type: 'dyreqtElement',
    //         data: {
    //             label: 'A',
    //             gridPosition: {
    //                 row: 1,
    //                 column: 1,
    //             }
    //         },
    //         parentNode: 'G1',
    //         extent: 'parent',
    //     },
    //     {
    //         id: 'B',
    //         type: 'dyreqtElement',
    //         data: {
    //             label: 'B',
    //             gridPosition: {
    //                 row: 2,
    //                 column: 1,
    //             }
    //         },
    //         parentNode: 'G1',
    //         extent: 'parent',
    //     },
    // ]
        // const nodes = [
        //     {
        //         id: 'A',
        //         type: 'dyreqtGroup',
        //         data: {
        //             label: 'Group A',
        //             gridPosition: {
        //                 row: 1,
        //                 column: 1,
        //                 height: 4,
        //                 width: 4,
        //             },
        //         },
        //     },
        //     {
        //         id: 'B',
        //         type: 'dyreqtElement',
        //         data: {
        //             label: MissionGraphViewModel.Nodes[0].label,
        //             gridPosition: {
        //                 row: 1,
        //                 column: 1,
        //             }
        //         },
        //         parentNode: 'A',
        //         extent: 'parent',
        //     },
        //     {
        //         id: 'C',
        //         type: 'dyreqtElement',
        //         data: {
        //             label: MissionGraphViewModel.Nodes[1].label,
        //             gridPosition: {
        //                 row: 2,
        //                 column: 1,
        //             }
        //         },
        //         parentNode: 'A',
        //         extent: 'parent',
        //     },
        // ];