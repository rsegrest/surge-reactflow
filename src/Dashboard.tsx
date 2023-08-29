import TopBar from "./topbar/TopBar";
import SidebarMenu from "./sidebar/SidebarMenu";
import MainContent from "./MainContent";
import SearchPanel from "./subpanels/search/SearchPanel";
import ResourceLibraryPanel from "./subpanels/resourcelibrary/ResourceLibraryPanel";
import SettingsButton from "./button/SettingsButton";
// import ViewType from "./types/ViewType";

const Dashboard = (
    props: {
        setViewType:Function,
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
            <TopBar setViewType={props.setViewType} />
            <div>
                <SidebarMenu
                    setViewType={props.setViewType}
                    panels={[
                        <SearchPanel />,
                        <ResourceLibraryPanel />,
                        <SettingsButton
                            setViewType={props.setViewType}
                        />
                    ]}
                />
                <MainContent content={props.content} />
            </div>
        </div>
    );
}
export default Dashboard;