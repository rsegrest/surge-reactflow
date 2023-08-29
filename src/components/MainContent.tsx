import { v4 as uuidv4 } from 'uuid';
import Container from 'react-bootstrap/Container';

const MainContent = (props:{
    content:JSX.Element[],
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
            {props.content.map((panel: JSX.Element) => (
                <div
                    key={uuidv4()}
                >
                    {panel}
                </div>
            ))}
        </Container>
    )
}
export default MainContent;