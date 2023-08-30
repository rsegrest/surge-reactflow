import RecentTopBar from "./RecentTopBar";
import ViewType from "../../../types/ViewType";

interface RecentPanelProps {
    setViewType:Function,
}
const RecentPanel = (props:RecentPanelProps) => {
    console.log(props.setViewType)
    return (
        <>
            <RecentTopBar
                recentLinks={[
                    {
                       label: 'Composition Graph',
                       link: ViewType.COMPOSITION,
                    },
                    {
                        label: 'Mission Graph',
                        link: ViewType.MISSION,
                    },
                    {
                        label: 'Mapping',
                        link: ViewType.MAPPING,
                    },
                    {
                        label: 'Dyreqt Run',
                        link: ViewType.DYREQT_RUN,
                    },
                ]}
                setViewType={props.setViewType}
            />
        </>
    )
}
export default RecentPanel;