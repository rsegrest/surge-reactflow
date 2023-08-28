import Button from 'react-bootstrap/Button';
import "../style/font.css";

const SettingsButton = () => {
    return (
        <Button
            style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '1.5rem',
                paddingLeft: '1.2rem',
                paddingRight: '1.2rem',
                margin: '1rem',
            }}>
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
            </Button>
    )
}
export default SettingsButton;