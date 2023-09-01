import '../style/base.css';
import '../style/font.css';

const HeaderLogotype = () => {
    return (
        <div
            className="vertical-center"
            style={{
                display: 'inline',
            }}
        >
            <span
                className='trebuchet-font-bold'
                style={{
                    fontFamily: 'Trebuchet MS',
                    fontStyle: 'bold',
                    color: 'white',
                    fontSize: '2rem',
                }}
            >
                {'DaaS GUI'}
            </span>
        </div>
    )
}
export default HeaderLogotype;
