import RecentTopBar from "./RecentTopBar";

const RecentPanel = () => {
    return (
        <>
            <RecentTopBar
                recentLinks={[
                    'Composition Graph',
                    'Mission Graph',
                    'Mapping',
                    'Dyreqt Run',
                ]}
            />
        </>
    )
}
export default RecentPanel;