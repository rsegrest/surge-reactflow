import TopBar from "./topbar/TopBar";
import SidebarMenu from "./sidebar/SidebarMenu";
import MainContent from "./MainContent";

const Dashboard = () => {
    return (
        <div
            style={{
                padding: '0px',
                backgroundColor: 'black',
            }}
        >
            <TopBar />
            <div>
                <SidebarMenu />
                <MainContent />
            </div>
        </div>
    );
}
export default Dashboard;