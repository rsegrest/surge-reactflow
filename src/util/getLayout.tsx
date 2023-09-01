
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
    setCurrentView?:Function|undefined,
) => {
    let layout = null;
    if (currentView === ViewType.HOME) {
        console.log('home')
        layout = (
            <Dashboard
                // setCurrentView={setCurrentView}
                content={[
                    <QuickStartPanel />,
                    <RecentPanel
                        // setCurrentView={setCurrentView}
                    />
            ]} />
        );
    } else if (currentView === ViewType.SETTINGS) {
        console.log('settings')
        layout = (
            <Dashboard
                // setCurrentView={setCurrentView}
                content={[
                    <SettingsPanel />
                ]}
            />
        )
    } else if (currentView === ViewType.OUTPUT) {
        console.log('output')
        layout = (
            <Dashboard
            // setCurrentView={setCurrentView}
                content={[
                    <OutputView />
                ]}
            />
        )
    } else if (currentView === ViewType.DYREQT_RUN) {
        console.log('dyreqt')
        layout = (
            <Dashboard
                // setCurrentView={setCurrentView}
                content={[
                    <DyreqtView />
                ]}
            />
        )
    } else if (currentView === ViewType.COMPOSITION) {
        console.log('composition')
        layout = (
            <Dashboard
                // setCurrentView={setCurrentView}
                content={[
                    <CompositionGraphView />
                ]}
            />
        )
    } else if (currentView === ViewType.MISSION) {
        console.log('mission')
        layout = (
            <Dashboard
                // setCurrentView={setCurrentView}
                content={[
                    <MissionEventGraphView />
                ]}
            />
        )
    } else if (currentView === ViewType.RESOURCE_NETWORK) {
        console.log('resource network')
        layout = (
            <Dashboard
                // setCurrentView={setCurrentView}
                content={[
                    <ResourceNetworkView />
                ]}
            />
        )
    } else if (currentView === ViewType.MAPPING) {
        console.log('mapping')
        layout = (
            <Dashboard
                // setCurrentView={setCurrentView}
                content={[
                    <MappingView />
                ]}
            />
        )
    }

    return layout;
}
