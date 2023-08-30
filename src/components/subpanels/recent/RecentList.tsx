import IconType from '../../../assets/icon/IconType';
import RecentReference from './RecentReference';
const RecentList = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <RecentReference
                filename={"file_name.composition_graph"}
                dateModified={"2023-08-01"}
                iconType={IconType.COMP}
            />
            <RecentReference
                filename={"file_name.mission_graph"}
                dateModified={"2023-08-02"}
                iconType={IconType.MISSION}
            />
            <RecentReference
                filename={"file_name.resource_network"}
                dateModified={"2023-08-03"}
                iconType={IconType.RESOURCE}
            />
        </div>
    )
}
export default RecentList;