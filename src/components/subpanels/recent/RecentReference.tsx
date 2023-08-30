import Icon from "../../../assets/icon/Icon";
import IconType from "../../../assets/icon/IconType";

const RecentReference = ({
    filename,
    dateModified,
    iconType,
}: {
    filename: string,
    dateModified: string,
    iconType: IconType,
}) => {

    return (
        <div
            style={{
                width: '100%',
                height: '2.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '0.2rem',
                paddingLeft: '1rem',
            }}
        >
            <span
                style={{
                    color: 'rgb(176,255,96)',
                    paddingRight: '0.5rem',
                    paddingBottom: '0.2rem',
                }}
            >
                <Icon iconType={iconType} size={16} />
            </span>
            <span
                style={{
                    color: 'white',
                    paddingBottom: '0rem',
                }}
            >
                {' '}
                {filename}
            </span>
            <span
                style={{
                    color: 'white',
                    float: 'right',
                    paddingRight: '3rem',
                }}
            >
                {' '}
                {dateModified}
            </span>
        </div>
    )
}
export default RecentReference;