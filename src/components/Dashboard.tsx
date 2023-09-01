import { v4 as uuidv4 } from 'uuid';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import SidebarMenu from "./sidebar/SidebarMenu";
import SearchPanel from "./subpanels/search/SearchPanel";
import ResourceLibraryPanel from "./subpanels/resourcelibrary/ResourceLibraryPanel";
import SettingsButton from "./button/SettingsButton";
import HeaderLogotype from "./topbar/HeaderLogotype";
import Icon from "../assets/icon/Icon";
import IconType from "../assets/icon/IconType";
import "./Dashboard.css";
import ViewType from '../types/ViewType';
// import MappingView from '../views/MappingView';

const Dashboard = (
    props: {
        setCurrentView?:Function|undefined,
        content: JSX.Element[],
    }
) => {
    const tabs = [
        ViewType.HOME,
        ViewType.COMPOSITION,
        ViewType.RESOURCE_NETWORK,
        ViewType.MISSION,
        ViewType.MAPPING,
        // 'Home', 'Composition Graph', 'Resource Network', 'Mission Graph', 'Mapping'
    ]
    return (
        <div
            className="flex-grid"
            style={{
                // textAlign: 'center',
                backgroundColor: 'black',
            }}
        >
            <div
                className="col sidebar-col"
                style={{
                    border: '1px solid red',
                    width: '25%',
                    display: 'inline-block'
                }}
            >
                <div
                    className="topbar-left-side"
                    style={{
                        border: '3px solid purple',
                        width: '100%',
                        display: 'inline-block'
                    }}
                >
                    <div
                        className="logo-container"
                        style={{
                            position: 'relative',
                            paddingLeft: '1rem',
                            left: '0px',
                            width: '50%',
                            display: 'inline',
                            textAlign: 'left',
                        }}
                    >
                        <HeaderLogotype />
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'inline',
                            paddingTop: '0.5rem',
                            float: 'right',
                        }}
                    >
                        <NavLink
                            to="/home"
                            style={{
                                paddingBottom: '0.5rem',
                                backgroundColor: 'transparent',
                                borderColor: 'rgb(24,24,24)',
                                display: 'inline',

                            }}
                        >
                            <Icon iconType={IconType.HOME} size={20} />
                        </NavLink>
                    </div>

                </div>
                <SidebarMenu
                    panels={[
                        <SearchPanel />,
                        <ResourceLibraryPanel />,
                        <SettingsButton />,
                    ]}
                />
            </div>
            <div
                className="col main-col"
                style={{
                    width: '75%',
                    display: 'inline-block',
                    verticalAlign: 'top',
                }}
            >
                {/* <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                    style={{
                        height: '100%',
                        color: 'white',
                        border: '1px solid black',
                        backgroundColor: 'gray',
                    }}
                > */}
                    <div
                        style={{
                            color: 'white',
                        }}
                    >
                        {JSON.stringify(tabs)}
                    </div>
                    {/* {tabs.map((tab:ViewType) => (
                        <Tab
                            key={uuidv4()}
                            eventKey={tab.toString()}
                            title={tab.toString()}
                            style={{
                                color: 'white',
                                padding: '1rem',
                                border: '1px solid gray',
                            }}
                        >
                            <Dashboard
                                // setCurrentView={setCurrentView}
                                // content={[
                                //     <MappingView />
                                // ]}
                            />
                        </Tab>
                    ))} */}
                {/* </Tabs> */}
            </div>
        </div>
    )
}
export default Dashboard;