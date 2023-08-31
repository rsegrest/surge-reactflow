import Container from 'react-bootstrap/Container';
import MappingPanel from '../components/subpanels/mapping/MappingPanel';

const MappingView = () => {
    return (
        <Container
            className="mapping-view"
            style={{
                position: 'absolute',
                width: "100vw",
                height: '100%',
                display: 'inline-block',
                color: 'gray',
            }}
        >
            <MappingPanel />
        </Container>
    )
}
export default MappingView;