
import ViewType from "../types/ViewType";
import Dashboard from "../components/Dashboard";
import QuickStartPanel from "../components/subpanels/quickstart/_QuickStartPanel";
import RecentPanel from "../components/subpanels/recent/RecentPanel";
import SettingsPanel from "../components/subpanels/settings/SettingsPanel";
import OutputView from "../views/OutputView";
import DyreqtView from "../views/DyreqtView";
import CompositionGraphView from "../views/CompositionGraphView";
import MissionEventGraphView from "../views/MissionEventGraphView";
import ResourceNetworkView from "../views/ResourceNetworkView";
import MappingView from "../views/MappingView";

export const getLayout = (
    currentView:ViewType|string,
) => {
    let layout = null;
    if (currentView === ViewType.HOME) {
        console.log('home')
        layout = [
            <QuickStartPanel />,
            <RecentPanel />
        ]
    } else if (currentView === ViewType.SETTINGS) {
        console.log('settings')
        layout = ([<SettingsPanel />])
    } else if (currentView === ViewType.OUTPUT) {
        console.log('output')
        layout = ([<OutputView />])
    } else if (currentView === ViewType.DYREQT_RUN) {
        console.log('dyreqt')
        layout = ([<DyreqtView />])
    } else if (currentView === ViewType.COMPOSITION) {
        console.log('composition')
        layout = ([<CompositionGraphView />])
    } else if (currentView === ViewType.MISSION) {
        console.log('mission')
        layout = ([<MissionEventGraphView />])
    } else if (currentView === ViewType.RESOURCE_NETWORK) {
        console.log('resource network')
        layout = ([<ResourceNetworkView />])
    } else if (currentView === ViewType.MAPPING) {
        console.log('mapping')
        layout = ([<MappingView />])
    }

    return layout;
}
