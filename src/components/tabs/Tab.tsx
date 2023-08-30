interface TabProps {
    label:string,
    tabLink:string,
}
const Tab = (props:TabProps) => {
    return (
        <div
            style={{
                float: 'left',
                width: '20%',
                height: '4rem',
                border: '1px solid gray',
                marginLeft: '0.2rem',
                marginRight: '0.2rem',
                paddingTop: '1rem',
                textAlign: 'center',
                color: 'white',
            }}
        >
            {props.label}
        </div>
    )
}
export default Tab;