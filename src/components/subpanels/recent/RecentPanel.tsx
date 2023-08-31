import RecentTopBar from "./RecentTopBar";
import ViewType from "../../../types/ViewType";

interface RecentPanelProps {
    setCurrentView?:Function|undefined,
}
const RecentPanel = (props:RecentPanelProps) => {
    // console.log(props.setCurrentView)
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
                // setViewType={props.setCurrentView}
            />
        </>
    )
}
export default RecentPanel;