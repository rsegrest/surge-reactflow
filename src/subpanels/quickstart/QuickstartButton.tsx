import Button from 'react-bootstrap/Button';
import Icon from "../../icon/Icon";
import { IconType } from '../../icon/IconType';
import '../../style/font.css';

interface QuickStartButtonProps {
    label:string,
    iconType:(IconType|string|null),
}

const QuickStartButton = (props:QuickStartButtonProps) => {
    return (
        <Button
            style={{
                width: '30%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                display: 'inline-block',
                borderRadius: '10px',
                height: '10rem',
                textAlign: 'center',
                margin: '1rem',
                paddingTop: '1.5rem',
                border: 'none',
                boxShadow: '0.1rem 0.1rem 0.3rem 0.3rem black',
            }}
        >
            <Icon
                size={48}
                iconType={props.iconType}
            />
            <div
                style={{
                    height: '35%',
                    fontStyle: 'bold',
                    fontSize: '150%',
                    marginTop: '0.75rem',
                    paddingTop: '0.5rem',
                    color: 'white',
                }}
            >
                <span
                    className='trebuchet-font-bold'
                    style={{
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'bold',
                        fontSize: '2rem',
                    }}
                >
                    {props.label}
                </span>
            </div>
        </Button>
    )
}
export default QuickStartButton;