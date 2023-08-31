import { v4 as uuidv4 } from 'uuid';
import TopBar from "./topbar/TopBar";
import SidebarMenu from "./sidebar/SidebarMenu";
import MainContent from "./MainContent";
import SearchPanel from "./subpanels/search/SearchPanel";
import ResourceLibraryPanel from "./subpanels/resourcelibrary/ResourceLibraryPanel";
import SettingsButton from "./button/SettingsButton";
import Tab from './tabs/Tab';
// import Tab from 'react-bootstrap/Tab';
import ViewType from '../types/ViewType';

const Dashboard = (
    props: {
        setCurrentView:Function,
        content: JSX.Element[],
    }
) => {
    return (
        <div
            style={{
                padding: '0px',
                backgroundColor: 'black',
            }}
        >
            <TopBar
                setCurrentView={props.setCurrentView}
                tabs={[
                    <Tab setCurrentView={props.setCurrentView} tabLink={ViewType.COMPOSITION} title={'Composition graph'} key={uuidv4()}></Tab>,
                    <Tab setCurrentView={props.setCurrentView} tabLink={ViewType.MISSION} title={'Mission Event graph'} key={uuidv4()}></Tab>,
                    <Tab setCurrentView={props.setCurrentView} tabLink={ViewType.RESOURCE_NETWORK} title={'Resource Network'} key={uuidv4()}></Tab>,
                    <Tab setCurrentView={props.setCurrentView} tabLink={ViewType.MAPPING} title={'Mapping'} key={uuidv4()}></Tab>,
                    <Tab setCurrentView={props.setCurrentView} tabLink={ViewType.DYREQT_RUN} title={'Dyreqt'} key={uuidv4()}></Tab>,
                ]}
            />
            <div>
                <SidebarMenu
                    // setCurrentView={props.setCurrentView}
                    panels={[
                        <SearchPanel />,
                        <ResourceLibraryPanel />,
                        <SettingsButton
                            setCurrentView={props.setCurrentView}
                        />
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