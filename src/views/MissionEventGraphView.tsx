import Container from 'react-bootstrap/Container';
import MissionEventGraphPanel from '../components/subpanels/missioneventgraph/MissionEventGraphPanel';

const MissionEventGraphView = () => {
    return (
        <Container
            className="mission-event-graph-view"
            style={{
                position: 'absolute',
                width: "100vw",
                height: '100%',
                display: 'inline-block',
                color: 'gray',
            }}
        >
            <MissionEventGraphPanel />
        </Container>
    )
}
export default MissionEventGraphView;