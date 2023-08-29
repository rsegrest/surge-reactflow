import '../style/base.css';
import '../style/font.css';

const HeaderLogotype = () => {
    return (
        <div
            className="vertical-center"
        >
            <h3
                className='trebuchet-font-bold'
                style={{
                    fontFamily: 'Trebuchet MS',
                    fontStyle: 'bold',
                    color: 'white',
                }}
            >
                {'DaaS GUI'}
            </h3>
        </div>
    )
}
export default HeaderLogotype;
