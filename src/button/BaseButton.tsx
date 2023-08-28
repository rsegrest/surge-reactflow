import Button from 'react-bootstrap/Button';
import { IconType } from '../icon/IconType';
import Icon from '../icon/Icon';
import "../style/font.css";

interface BaseButtonProps {
    backgroundColor?: string;
    textColor?: string;
    buttonLabel?: string;
    borderColor?: string|null;
    iconType?: string|IconType;
    paddingLeft?: string|number;
    paddingRight?: string|number;
}

const BaseButton = (props:BaseButtonProps) => {
    const backgroundColor = props.backgroundColor || 'rgb(176,255,96)';
    const textColor = props.textColor || 'black';
    const buttonLabel = props.buttonLabel || '';
    const borderColor:(string|null) = props.borderColor || null;
    const iconType:(string|IconType|null) = props.iconType || null;

    let border = 'none'
    let theIcon = null;
    let paddingLeft =  '1.2rem';
    let paddingRight = '0';
    if (props.paddingLeft) {
        paddingLeft = `${props.paddingLeft}rem`;
    }
    if (props.paddingRight) {
        paddingRight = `${props.paddingRight}rem`;
    }
    if (borderColor !== null) {
        border = '1px solid ' + borderColor;
    }
    if (iconType) {
        theIcon = (
            <span
                style={{
                    marginRight: '0.6rem',
                }}
            >
                <Icon iconType={iconType} size={16} />
            </span>
        );
    }
    return (
        <Button
            className='trebuchet-font'
            style={{
                fontFamily: 'Trebuchet MS',
                fontStyle: 'bold',
                backgroundColor: backgroundColor,
                color: textColor,
                border,
                borderRadius: '1.5rem',
                paddingLeft:  paddingLeft,
                paddingRight: '1.2rem',
                margin: '1rem',
            }}>
                {theIcon ? theIcon : ' '}
            <span
                className='trebuchet-font'
                style={{
                    fontFamily: 'Trebuchet MS',
                    fontStyle: 'bold',
                }}
            >
                {buttonLabel}
            </span>
        </Button>
    );
}
export default BaseButton;