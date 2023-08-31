import Container from 'react-bootstrap/Container';
import OutputPanel from '../components/output/OutputPanel';

const OutputView = (props:{
    // setViewType: Function,
}) => {
    return (
        <Container
            className="main-content"
            style={{
                position: 'absolute',
                width: "100vw",
                height: '100%',
                display: 'inline-block',
                color: 'gray',
            }}
        >
            <OutputPanel />
        </Container>
    )
}
export default OutputView;