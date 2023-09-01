import React from 'react';
import ViewType from './types/ViewType';
import { getLayout } from './util/getLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

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