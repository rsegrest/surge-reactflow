import Button from 'react-bootstrap/Button';
import ViewType from '../../../types/ViewType';

interface RecentLinkProps {
    label: string,
    linkTarget:ViewType|string,
    setViewType?:Function|undefined,
}

const RecentLink = (props: RecentLinkProps) => {
    return (
        <Button
            className='recent-link-btn'
            style={{
                backgroundColor: 'transparent',
                padding: '0',
                marginLeft: '1rem',
                marginRight: '1rem',
                marginBottom: '1.2rem',
                height: '1rem',
                border: '1px solid rgb(24,24,24)'
            }}
            onClick={() => {
                // props.setViewType(props.linkTarget);
            }}
        >
            <h5
                style={{
                    color: 'white',
                    display: 'inline-block',
                }}
            >
                {props.label}
            </h5>
        </Button>
    )
};
export default RecentLink;