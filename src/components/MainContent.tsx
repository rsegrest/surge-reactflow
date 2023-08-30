import React from 'react';
import Container from 'react-bootstrap/Container';
import { v4 as uuidv4 } from 'uuid';

const MainContent = (props:{
    content:JSX.Element[],
    setViewType:Function,
}) => {
    console.log(props.setViewType)
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
            {props.content.map((panel: JSX.Element) => {
                return (
                    <React.Fragment
                        key={uuidv4()}
                    >
                        {panel}
                    </React.Fragment>
                )})}
        </Container>
    )
}
export default MainContent;