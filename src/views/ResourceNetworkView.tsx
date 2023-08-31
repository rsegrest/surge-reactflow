import Container from 'react-bootstrap/Container';
import ResourceNetworkGraphPanel from '../components/subpanels/resourcenetworkgraph/ResourceNetworkGraphPanel';

interface ResourceNetworkViewProps {
}

const ResourceNetworkView = (props:ResourceNetworkViewProps) => {
    return (
        <Container
            className="resource-network-view"
            style={{
                position: 'absolute',
                width: "100vw",
                height: '100%',
                display: 'inline-block',
                color: 'gray',
            }}
        >
            <ResourceNetworkGraphPanel />
        </Container>
    )
}
export default ResourceNetworkView;