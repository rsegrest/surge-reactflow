import Container from 'react-bootstrap/Container';
import OutputPanel from './output/OutputPanel';

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
            }}
        >
            <OutputPanel />
        </Container>
    )
}
export default OutputView;