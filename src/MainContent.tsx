import Container from 'react-bootstrap/Container';
import QuickStartPanel from './subpanels/quickstart/QuickstartPanel';
import RecentPanel from './subpanels/recent/RecentPanel';

const MainContent = () => {
    return (
        <Container
            className="main-content"
            style={{
                position: 'absolute',
                width: "100vw",
                height: '100%',
                display: 'inline-block',
            }}
        >
            <QuickStartPanel />
            <RecentPanel />
        </Container>
    )
}
export default MainContent;