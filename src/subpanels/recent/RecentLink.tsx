import Button from 'react-bootstrap/Button';
const RecentLink = ({ linkName }: { linkName: string }) => {
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
        >
            <h5
                style={{
                    color: 'white',
                    display: 'inline-block',
                }}
            >
                {linkName}
            </h5>
        </Button>
    )
};
export default RecentLink;