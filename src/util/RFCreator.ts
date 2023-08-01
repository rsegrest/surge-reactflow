import {
    MissionGraphViewModel as MissionGraphViewModel,
} from '../test_viewmodels/MissionGraphViewModel.ts';
import {
    Node,
    Edge,
} from 'reactflow';

// export interface groupdata {
//     id:string;
//     label:string;
//     nodes:Node[];
//     data:unknown[]|null;
//     gridLayout:{
//         row:number;
//         column:number;
//         width?:number;
//         height?:number;
//     }
// }
// Groups: 
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
    data: unknown|undefined|null;
}
export class RFCreator {

    groups = [
        MissionGraphViewModel.Groups[0],
        MissionGraphViewModel.Groups[1],
    ]
    group_1_nodes = [
        MissionGraphViewModel.Nodes[0],
        MissionGraphViewModel.Nodes[1],
        MissionGraphViewModel.Nodes[2],
    ]

    edge_data = [
        [MissionGraphViewModel.Nodes[0], MissionGraphViewModel.Nodes[1]],
        [MissionGraphViewModel.Nodes[1], MissionGraphViewModel.Nodes[2]],
    ]

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
                        y: gridLayout.row * 80,
                    }
                } else {
                    position = {
                        x: gridLayout.column * 200,
                        y: gridLayout.row * 200,
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
        const edges: Edge[] = [{
            id: 'eA-B', source: 'A', target: 'B',
            style: {
                strokeWidth: 2,
                stroke: '#FF0072',
            },
        }];
        return edges;
    }
    static getPosition(
        gridLayout:{column:number, row:number}|null = null
    ) {
        if (gridLayout) {
            return {
                x: gridLayout.column * 100,
                y: gridLayout.row * 80,
            }
        }
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
    static createMissionGraphNodeViewModels() {
        // Get Groups
        const groupNodes = this.formatGroups();
        const nodes = [...groupNodes]
        const updatedNodes = this.translateGridToReactFlowSpace(
            nodes as Node[]
        );
        return updatedNodes;
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