import React from 'react';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import OutputView from './views/OutputView';
import QuickStartPanel from './components/subpanels/quickstart/QuickstartPanel';
import RecentPanel from './components/subpanels/recent/RecentPanel';
import SettingsPanel from './components/subpanels/settings/SettingsPanel';
import ViewType from './types/ViewType';
import DyreqtView from './views/DyreqtView';
import CompositionGraphView from './views/CompositionGraphView';
import MissionEventGraphView from './views/MissionEventGraphView';
import ResourceNetworkView from './views/ResourceNetworkView';
import MappingView from './views/MappingView';

const getLayout = (currentView:ViewType|string, setCurrentView:Function) => {
    let layout = null;
    if (currentView === ViewType.HOME) {
        layout = (
            <Dashboard
                setCurrentView={setCurrentView}
                content={[
                    <QuickStartPanel />,
                    <RecentPanel setCurrentView={setCurrentView} />
            ]} />
        );
    } else if (currentView === ViewType.SETTINGS) {
        layout = (
            <Dashboard
                setCurrentView={setCurrentView}
                content={[
                    <SettingsPanel />
                ]}
            />
        )
    } else if (currentView === ViewType.OUTPUT) {
        layout = (
            <Dashboard
            setCurrentView={setCurrentView}
                content={[
                    <OutputView />
                ]}
            />
        )
    } else if (currentView === ViewType.DYREQT_RUN) {
        layout = (
            <Dashboard
                setCurrentView={setCurrentView}
                content={[
                    <DyreqtView />
                ]}
            />
        )
    } else if (currentView === ViewType.COMPOSITION) {
        layout = (
            <Dashboard
                setCurrentView={setCurrentView}
                content={[
                    <CompositionGraphView />
                ]}
            />
        )
    } else if (currentView === ViewType.MISSION) {
        layout = (
            <Dashboard
                setCurrentView={setCurrentView}
                content={[
                    <MissionEventGraphView />
                ]}
            />
        )
    } else if (currentView === ViewType.RESOURCE_NETWORK) {
        layout = (
            <Dashboard
                setCurrentView={setCurrentView}
                content={[
                    <ResourceNetworkView />
                ]}
            />
        )
    } else if (currentView === ViewType.MAPPING) {
        layout = (
            <Dashboard
                setCurrentView={setCurrentView}
                content={[
                    <MappingView />
                ]}
            />
        )
    }

    return layout;
}

const App = () => {
    const [currentView, setCurrentView] = React.useState(ViewType.HOME);
    console.log(currentView)
    return (
        <div>
            {getLayout(currentView, setCurrentView)}
        </div>
    );
}
export default App;