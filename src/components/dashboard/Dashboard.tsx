import Sidebar from './SidebarMenu';
import MainContainer from './MainContainer';
import PanelType from '../../types/PanelTypes';

// import '../../styles/dashboard.css';

interface DashboardProps {
    panels: PanelType[];
}

const Dashboard = (props:DashboardProps) => {
    return (
        <div className='dashboard-container'>
            <h1>Dashboard</h1>
            <Sidebar />
            <MainContainer />
        </div>
    );
}
export default Dashboard;