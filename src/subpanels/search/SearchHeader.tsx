import "../../style/font.css";
const SearchHeader = () => {
    return (
        <div>
            <h3
                className="trebuchet-font-bold"
                style={{
                    fontFamily: 'Trebuchet MS',
                    fontStyle: 'bold',
                    margin: '1.1rem',
                    color: 'white'
                }}
            >Search DaaS</h3>
        </div>
    )
}
export default SearchHeader;