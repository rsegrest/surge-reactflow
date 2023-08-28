import MainContainer from './MainContainer';
import PanelType from '../../types/PanelTypes';
import DashboardSidePanel from './leftPanelDashboard'
import Dashbody from './dashbody';
import TopNavScreen from './navTabDashboard';
import { Col, Row, } from "react-bootstrap"
import "../../style/dashboard.css";

interface DashboardProps {
    panels: PanelType[];
}

const Dashboard = (props: DashboardProps) => {
    return (
        <div className='dashboard-container'>
            <TopNavScreen />
            <Row>
            <Col xs="3" className='removeGap'>
                <DashboardSidePanel />
            </Col>
            <Col xs="9" className='removeGap'>
                <Dashbody />
            </Col>
            </Row>
        </div>
    );
}
export default Dashboard;