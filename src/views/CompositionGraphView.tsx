import Container from 'react-bootstrap/Container';
import CompositionGraphPanel from '../components/subpanels/compositiongraph/CompositionGraphPanel';

const DyreqtView = () => {
    return (
        <Container
            className="dyreqt-view"
            style={{
                position: 'absolute',
                width: "100vw",
                height: '100%',
                display: 'inline-block',
                color: 'gray',
            }}
        >
            <CompositionGraphPanel />
        </Container>
    )
}
export default DyreqtView;