
import { MainContentTabs } from '../MainContentTabs';
import SideContent from '../SideContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dashboard.css";

const Dashboard = (
    props: {
        setCurrentView?:Function|undefined,
        content: JSX.Element[],
    }
) => {
    
    return (
        <div
            className="flex-grid"
            style={{
                backgroundColor: 'black',
            }}
        >
            {[
                <SideContent />,
                <MainContentTabs />
            ]}
        </div>
    )
}
export default Dashboard;