import Button from 'react-bootstrap/Button';
import Icon from '../../../assets/icon/Icon';
import "../../style/font.css";

export const ResourceLibraryRow = (props:{libraryName:string}) => {
    const { libraryName } = props;
    return (
        <Button
            style={{
                width: '90%',
                height: '3rem',
                color: 'white',
                backgroundColor: 'black',
                textAlign: 'left',
                marginLeft: '1rem',
                paddingTop: '0rem',
                paddingLeft: '1rem',
                marginRight: '0.5rem',
                marginBottom: '0.3rem',
                border: 'none',
            }}
        >
        <Icon
            iconType='db'
            size={16}
        />
        <span
            className="trebuchet-font-bold"
            style={{
                fontFamily: 'Trebuchet MS',
                fontStyle: 'bold',    
                paddingLeft: '1rem',
                paddingTop: '0.2rem',
                fontSize: '1.3rem',
            }}
        >
            {libraryName}
        </span>
    </Button>
    )
}
export default ResourceLibraryRow;