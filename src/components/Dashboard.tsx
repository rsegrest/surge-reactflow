import { v4 as uuidv4 } from 'uuid';
import TopBar from "./topbar/TopBar";
import SidebarMenu from "./sidebar/SidebarMenu";
import MainContent from "./MainContent";
import SearchPanel from "./subpanels/search/SearchPanel";
import ResourceLibraryPanel from "./subpanels/resourcelibrary/ResourceLibraryPanel";
import SettingsButton from "./button/SettingsButton";
import Tab from './tabs/Tab';
import ViewType from '../types/ViewType';
// import Tab from 'react-bootstrap/Tab';

const Dashboard = (
    props: {
        setCurrentView?:Function|undefined,
        content: JSX.Element[],
    }
) => {
    return (
        <div
            style={{
                padding: '0px',
                backgroundColor: 'black',
                border: '1px solid orange',
            }}
        >
            <div
                className="topbar-container"
                style={{
                    border: '2px solid pink',
                }}
            >

                <TopBar
                    tabs={[
                        <Tab tabLink={ViewType.COMPOSITION} title={'Composition graph'} key={uuidv4()}></Tab>,
                        <Tab tabLink={ViewType.MISSION} title={'Mission Event graph'} key={uuidv4()}></Tab>,
                        <Tab tabLink={ViewType.RESOURCE_NETWORK} title={'Resource Network'} key={uuidv4()}></Tab>,
                        <Tab tabLink={ViewType.MAPPING} title={'Mapping'} key={uuidv4()}></Tab>,
                        <Tab tabLink={ViewType.DYREQT_RUN} title={'Dyreqt'} key={uuidv4()}></Tab>,
                    ]}
                />
            </div>
            <div
                style={{
                    border: '1px solid red'
                }}
            >
                <SidebarMenu
                    panels={[
                        <SearchPanel />,
                        <ResourceLibraryPanel />,
                        <SettingsButton />,
                    ]}
                />
                <MainContent
                    content={props.content}
                    setCurrentView={props.setCurrentView}
                />
            </div>
        </div>
    );
}
export default Dashboard;