import "../../styles/fonts.css";

const QuickStartButton = (props:{
    label:string,
}) => {
    return (
        <div
            style={{
                width: '30%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                display: 'inline-block',
                borderRadius: '10px',
                height: '10rem',
                textAlign: 'center',
                margin: '1rem',
            }}
        >
            <div
                style={{
                    height: '65%',
                }}
            >
                Icon
            </div>
            <div
                style={{
                    height: '35%',
                    fontStyle: 'bold',
                    fontSize: '150%',
                    marginTop: '0.75rem',
                    color: 'white'
                }}
            >
                {props.label}
            </div>
        </div>
    )
}
export default QuickStartButton;