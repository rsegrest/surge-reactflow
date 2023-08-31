import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import "../style/font.css";

const SettingsButton = (props:{
    setCurrentView?: Function|undefined,
}) => {
    return (
        <NavLink
            to="/settings"
            style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '1.5rem',
                paddingLeft: '1.2rem',
                paddingRight: '1.2rem',
                margin: '1rem',
            }}
        >
                <span>
                    {'⚙'}
                </span>
                <span
                    className='trebuchet-font-bold'
                    style={{
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'bold',
                        paddingLeft: '1rem',
                    }}
                >
                    {'Settings'}
                </span>
            </NavLink>
    )
}
export default SettingsButton;