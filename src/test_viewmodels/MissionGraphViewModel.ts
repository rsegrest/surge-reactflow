const group_1_nodes = [
    {
        id: "856c1097-d39a-45e2-8dcf-778ffb9f7740",
        label: "launch_cargo1_link",
        data: {
            gridLayout: {
                row: 1,
                column: 1,
            }
        },
        parentNode: "5e60e695-5bdd-4aa0-83f6-76eb37e99a1f",
    },
    {
        id: "9a5f4f9d-6a33-40f9-b3ef-d6f00309be40",
        label: "cargo1_tanks_wait_for_inline",
        data: {
            gridLayout: {
                row: 2,
                column: 1,
            }
        },
        parentNode: "5e60e695-5bdd-4aa0-83f6-76eb37e99a1f",
    },
    {
        id: "1a9f0c3f-7d85-41e8-aa6e-588ead3b1d19",
        label: "rcx_burn_cargo1_tanks_to_inline",
        data: {
            gridLayout: {
                row: 3,
                column: 1,
            }
        },
        parentNode: "5e60e695-5bdd-4aa0-83f6-76eb37e99a1f",
    },
]

const group_2_nodes = [
    {
        id: "70170851-17b9-429a-9ded-4f17e729f53c",
        label: "launch_cargo1_inline_tank",
        data: {
            gridLayout: {
                row: 1,
                column: 1,
            }
        },
        parentNode: "ea3a30b7-1f93-4e41-a845-d0b4cc7c4747",
    },
    {
        id: "41ac254e-6534-4135-9eb5-c5be17fd1a12",
        data: {
            gridLayout: {
                row: 2,
                column: 1,
            }
        },
        label: "cargo1_inline_wait_for_tanks",
        parentNode: "ea3a30b7-1f93-4e41-a845-d0b4cc7c4747",
    },
    {
        id: "560b03cb-ffdf-4c23-9733-57b2cc8ed797",
        data: {
            gridLayout: {
                row: 3,
                column: 1,
            }
        },
        label: "rcx_born_cargo1_inline_to_tanks",
        parentNode: "ea3a30b7-1f93-4e41-a845-d0b4cc7c4747",
    },
]

const connect_one_nodes = [
    {
        id: "bc373abb-4360-4bad-a91f-1c62d0c7360b",
        label: "dock_cargo1_tanks_to_inline",
        data: {
            gridLayout: {
                row: 4,
                column: 3,
            }
        },
    },
    {
        id: "8b1b5ae9-ff44-4f7d-8daa-7cd79924e615",
        label: "jettison_cargo1_tanks_cam",
        data: {
            gridLayout: {
                row: 5,
                column: 3,
            }
        },
    },
];

const first_drop_nodes = [
    // left
    {
        id: "954b227f-bfbb-4d1d-94ff-736c5f467ed6",
        label: "disposal_cargo1_tanks_cam",
        data: {
            gridLayout: {
                row: 6,
                column: 1,
            }
        },
    },
    // right
    {
        id: "fd6c80e6-8051-4111-90df-765e1e4d13e1",
        label: "cargo1_slack_wait_for_drop_tanks",
        data: {
            gridLayout: {
                row: 6,
                column: 3,
            }
        },
    },
    {
        id: "ebf88ef2-c993-4cf2-a16f-9e78edab9548",
        label: "rcs_burn_cargo1_slack_burn_to_drop_tank",
        data: {
            gridLayout: {
                row: 7,
                column: 3,
            }
        },
    },
]

const first_connecting_nodes = [
    {
        id: "b01d77d5-e258-41d2-960a-596f5da54557",
        label: "launch_cargo1_drop_tank",
        data: {
            gridLayout: {
                row: 5,
                column: 5,
            }
        },
    },
    {
        id: "5cc49080-0712-4e53-9f25-8099b06ea2ba",
        label: "idle_cargo1_drop_tank_1",
        data: {
            gridLayout: {
                row: 6,
                column: 5,
            }
        },
    },
    {
        id: "ead7e7cd-6b0b-4ef4-989f-fbc235ea403c",
        label: "rcs_burn_cargo1_drop_tank_1_cam",
        data: {
            gridLayout: {
                row: 7,
                column: 5,
            }
        },
    }
]

const middle_column_nodes_after_connect = [
    {
        id: "5cceaf97-9342-437f-a50f-c042f1df22ed",
        label: "dock_cargo1_drop_tank_1",
        data: {
            gridLayout: {
                row: 8,
                column: 3,
            }
        },
    },
    {
        id: "46e71b22-d621-456f-92ee-4dcbe55ac7ea",
        label: "idle_1_slack_cargo1_drop_tank_aggregation",
        data: {
            gridLayout: {
                row: 9,
                column: 3,
            }
        },
    },
    {
        id: "70ba1a1b-9333-4ef5-adda-23d22aab6d72",
        label: "rcs_burn_1_slack_cargo1_drop_tank_aggregation",
        data: {
            gridLayout: {
                row: 10,
                column: 3,
            }
        },
    }
]

const third_column_before_second_connect = [
    {
        id: "3f83c11f-fcdb-43ed-9a3c-717f67dbfe58",
        label: "launch_cargo1_drop_tank_2",
        data: {
            gridLayout: {
                row: 8,
                column: 5,
            }
        },
    },
    {
        id: "6d8ad087-19b5-4ad6-a9a6-df3808c9cb63",
        label: "idle_cargo1_drop_tank_2",
        data: {
            gridLayout: {
                row: 9,
                column: 5,
            }
        },
    },
    {
        id: "5f7b7706-ad1d-40a8-9aa9-a1bb9a5c77d3",
        label: "rcs_burn_cargo1_drop_tank_2_cam",
        data: {
            gridLayout: {
                row: 10,
                column: 5,
            }
        },
    }
]

const third_connection_set = [
    {
        id: "8e213fd5-64f6-422c-abc4-5d7f054796b8",
        label: "dock_cargo1_drop_tank_2",
        data: {
            gridLayout: {
                row: 11,
                column: 3,
            }
        }
    },
    {
        id: "ae824aa3-f053-404d-b58b-9074b5046851",
        label: "idle_2_slack_cargo1_drop_tank_aggregation",
        data: {
            gridLayout: {
                row: 12,
                column: 3,
            }
        }
    },
    {
        id: "f95e0bd0-e6fa-441f-a432-cd7e7ca4e13c",
        label: "rcs_burn_2_slack_cargo1_drop_tank_aggregation",
        data: {
            gridLayout: {
                row: 13,
                column: 3,
            }
        }
    }
]

const third_column_before_fourth_connect = [
    {
        id: "fed7bce1-8ff4-4a17-bb54-d353bcf59364",
        label: "launch_cargo1_drop_tank_3",
        data: {
            gridLayout: {
                row: 11,
                column: 5,
            }
        }
    },
    {
        id: "62ad9153-6a4c-4c72-92a2-f33c45aa9d4f",
        label: "idle_cargo1_drop_tank_3",
        data: {
            gridLayout: {
                row: 12,
                column: 5,
            }
        }
    },
    {
        id: "f31a52bc-e8a2-4dd1-a2a0-d0ac82063e1e",
        label: "rcs_burn_cargo1_drop_tank_3_cam",
        data: {
            gridLayout: {
                row: 13,
                column: 5,
            }
        }
    }
]

const fourth_connection_set = [
    {
        id: "b1ce52d4-ff3a-4969-a726-f65d6e1f4a7e",
        label: "launch_cargo1_drop_tank_4",
        data: {
            gridLayout: {
                row: 14,
                column: 3,
            }
        }
    },
    {
        id: "53ba7d4a-b3f3-45fc-9a76-2d08ab711690",
        label: "idle_cargo1_drop_tank_4",
        data: {
            gridLayout: {
                row: 15,
                column: 3,
            }
        }
    },
    {
        id: "e46aa165-62a4-4d74-9dd6-956cb80da9ad",
        label: "rcs_burn_cargo1_drop_tank_4_cam",
        data: {
            gridLayout: {
                row: 16,
                column: 3,
            }
        }
    }
]

const fifth_connection_set = [
    {
        id: "a59b6e86-28b3-418b-9f1a-c1da06d7c858",
        label: "dock_final_cargo1_drop_tank",
        data: {
            gridLayout: {
            row: 14,
            column: 5,
            }
        }
    },
    {
        id: "a16b387b-7b15-4cd1-8b4a-62848b1c532c",
        label: "cargo1_slack_wait_for_stub_core",
        data: {
            gridLayout: {
            row: 15,
            column: 5,
            }
        }
    },
    {
        id: "28a8dbf7-0a64-4d7c-9a90-10f3cc10c663",
        label: "rcs_burn_cargo1_slack_burn_to_stub_core",
        data: {
            gridLayout: {
                row: 16,
                column: 5,
            }
        }
    }
]

const third_column_before_sixth_connect = [
    {
        id: "45a2c8c8-69bb-499f-a72a-b1d86af029db",
        label: "launch_cargo1_stub_core",
        data: {
            gridLayout: {
                row: 17,
                column: 3,
            }
        }
    },
    {
        id: "62156f3b-6302-4e3c-8980-b747834d5616",
        label: "idle_cargo1_stub_core_for_slack",
        data: {
            gridLayout: {
                row: 18,
                column: 3,
            }
        }
    },
    {
        id: "5b47e658-aa3f-4445-96b0-92f7a0b39f95",
        label: "rcs_burn_cargo1_stub_core_to_slack",
        data: {
            gridLayout: {
                row: 19,
                column: 3,
            }
        }
    }
]

const sixth_connection_set = [
    {
        id: "1c4885b2-f925-4fb7-80e7-72d6c293384c",
        label: "dock_cargo1_stub_core_to_tank_slack",
        data: {
            gridLayout: {
                row: 20,
                column: 3,
            }
        }
    }
]


export const MissionGraphViewModel = {
    defaultNodeColor: "yellow",
    defaultConnectionColor: "black",
    defaultConnectionType: "solid",
    defaultConnectionDirections: 1,
    Nodes: [
        ...group_1_nodes,
        ...group_2_nodes,
        ...connect_one_nodes,
        ...first_drop_nodes, // left and right
        ...first_connecting_nodes,
        ...middle_column_nodes_after_connect,
        ...third_column_before_second_connect,
        ...third_connection_set,
        ...third_column_before_fourth_connect,
        ...fourth_connection_set,
        ...fifth_connection_set,
        ...third_column_before_sixth_connect,
        ...sixth_connection_set
    ],
    Connections: [
        {
            sources: [
                group_1_nodes[2].id,
                group_2_nodes[2].id,
            ],
            target: connect_one_nodes[0].id,
        },
        // connection 2
        // connection 3
        // connection 4
        // connection 5
        // connection 6 ?
    ],
    Edges: [
        {
            
        }
    ],
    Drops: [
        {
            source: connect_one_nodes[1].id,
            targets: [
                first_drop_nodes[0].id,
                first_drop_nodes[1].id,   
            ]
        },
    ],
    Groups: [
        {
            id: "5e60e695-5bdd-4aa0-83f6-76eb37e99a1f",
            label: "Group 1",
            nodes: group_1_nodes,
            gridLayout: {
                row: 1,
                column: 2,
                width: 3,
                height: 3,
            },
            data: {}
        },
        {
            id: "ea3a30b7-1f93-4e41-a845-d0b4cc7c4747",
            label: "Group 2",
            nodes: group_2_nodes,
            gridLayout: {
                row: 1,
                column: 5,
                width: 3,
                height: 3,
            },
            data: {}
        }
    ]
    
}
export default MissionGraphViewModel;