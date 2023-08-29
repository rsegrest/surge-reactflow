import React from 'react';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import OutputView from './OutputView';
import QuickStartPanel from './subpanels/quickstart/QuickstartPanel';
import RecentPanel from './subpanels/recent/RecentPanel';
import SettingsPanel from './subpanels/settings/SettingsPanel';
import ViewType from './types/ViewType';

const getLayout = (view:ViewType|string, setViewType:Function) => {
    let layout = null;
    if (view === ViewType.HOME) {
        layout = (
            <Dashboard
                setViewType={setViewType}
                content={[
                    <QuickStartPanel />,
                    <RecentPanel />
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