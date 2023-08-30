import React from 'react';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import OutputView from './components/OutputView';
import QuickStartPanel from './components/subpanels/quickstart/QuickstartPanel';
import RecentPanel from './components/subpanels/recent/RecentPanel';
import SettingsPanel from './components/subpanels/settings/SettingsPanel';
import ViewType from './types/ViewType';
import DyreqtView from './components/DyreqtView';

const getLayout = (view:ViewType|string, setViewType:Function) => {
    let layout = null;
    if (view === ViewType.HOME) {
        layout = (
            <Dashboard
                setViewType={setViewType}
                content={[
                    <QuickStartPanel />,
                    <RecentPanel setViewType={setViewType} />
            ]} />
        );
    } else if (view === ViewType.SETTINGS) {
        layout = (
            <Dashboard
                setViewType={setViewType}
                content={[
                    <SettingsPanel />
                ]}
            />
        )
    } else if (view === ViewType.OUTPUT) {
        layout = (
            <Dashboard
                setViewType={setViewType}
                content={[
                    <OutputView />
                ]}
            />
        )
    } else if (view === ViewType.DYREQT_RUN) {
        layout = (
            <Dashboard
                setViewType={setViewType}
                content={[
                    <DyreqtView />
                ]}
            />
        )
    }
    return layout;
}

const App = () => {
    const [view, setViewType] = React.useState(ViewType.HOME);
    console.log(view)
    return (
        <div>
            {getLayout(view, setViewType)}
        </div>
    );
}
export default App;