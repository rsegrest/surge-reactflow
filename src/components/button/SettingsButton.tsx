import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../style/font.css";

const SettingsButton = (props:{
    setCurrentView?: Function|undefined,
}) => {
    return (
        <div
            style={{
                height: '2rem',
                backgroundColor: 'black',
                paddingLeft: '1.5rem',
            }}
            >
            <Link
                className='btn'
                to="/settings"
                style={{
                    position: 'relative',
                    top: '0px',
                    left: '0px',
                    color: 'white',
                    border: '1px solid white',
                    borderRadius: '2rem',
                    
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        top: '0px',
                        left: '0px',
                        width: '6rem'

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

                </div>

            </Link>
        </div>
    )
}
export default SettingsButton;