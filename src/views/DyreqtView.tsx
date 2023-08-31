import Container from 'react-bootstrap/Container';
import DyreqtPanel from '../components/subpanels/dyreqt/DyreqtPanel';

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
            <DyreqtPanel />
        </Container>
    )
}
export default DyreqtView;