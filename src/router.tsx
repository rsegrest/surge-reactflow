import {
  createBrowserRouter,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import QuickStartPanel from './components/subpanels/quickstart/_QuickStartPanel';
import RecentPanel from './components/subpanels/recent/RecentPanel';
// import ViewType from './types/ViewType';
import SettingsPanel from './components/subpanels/settings/SettingsPanel';
import OutputView from './views/OutputView';
import DyreqtView from './views/DyreqtView';
import CompositionGraphView from './views/CompositionGraphView';
import MissionEventGraphView from './views/MissionEventGraphView';
import ResourceNetworkView from './views/ResourceNetworkView';
import MappingView from './views/MappingView';
import './index.css'

const getContentForRoute = (route:string) => {
  if ('home' === route) {
    return [
      <QuickStartPanel />,
      <RecentPanel />
    ];
  } else if ('settings' === route) {
    return [<SettingsPanel />];
  } else if ('output' === route) {
    return [<OutputView />];
  } else if ('dyreqt' === route) {
    return [<DyreqtView />];
  } else if ('composition' === route) {
    return [<CompositionGraphView />];
  } else if ('mission' === route) {
    return [<MissionEventGraphView />];
  } else if ('resourcenetwork' === route) {
    return [<ResourceNetworkView />];
  } else if ('mapping' === route) {
    return [<MappingView />];
  }
  return [];
}


const getElementForRoute = (route:string) => {
  const contentComponents:JSX.Element[] = getContentForRoute(route);
  return (
    <Dashboard
      content={contentComponents as JSX.Element[]}
    />
  )
}

export const router = createBrowserRouter([
    {
      path: '/',
      element: getElementForRoute('home'),
    },
    {
      path: '/home',
      element: getElementForRoute('home'),
    },
    {
      path: '/settings',
      element: getElementForRoute('settings'),
    },
    {
      path: '/output',
      element: getElementForRoute('output'),
    },
    {
      path: '/dyreqt',
      element: getElementForRoute('dyreqt'),
    },
    {
      path: '/composition',
      element: getElementForRoute('composition'),
    },
    {
      path: '/mission',
      element: getElementForRoute('mission'),
    },
    {
      path: '/resourcenetwork',
      element: getElementForRoute('resourcenetwork'),
    },
    {
      path: '/mapping',
      element: getElementForRoute('mapping'),
    }
])
export default router;