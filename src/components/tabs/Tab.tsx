import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
interface TabProps {
    title:string,
    tabLink:string,
    setCurrentView?:Function|undefined,
}
const Tab = (props:TabProps) => {
    return (
        <NavLink
            to="/home"
            key={uuidv4()}
            style={{
                float: 'left',
                width: '20%',
                color: 'white',
                height: '4rem',
                border: '1px solid gray',
                textAlign: 'center',
                paddingTop: '0.2rem',
                backgroundColor: 'transparent',
                fontFamily: 'Trebuchet MS',
                fontStyle: 'bold',
                fontSize: '120%',
            }}
            onClick={() => {
                console.log('TAB LINKS TO:')
                console.log(props.tabLink);
                // props.setCurrentView(props.tabLink);
            }}
        >
            {props.title}
        </NavLink>
    )
}
export default Tab;