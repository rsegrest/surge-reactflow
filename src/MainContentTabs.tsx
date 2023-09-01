import { v4 as uuidv4 } from 'uuid';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { getLayout } from './util/getLayout';
import ViewType from './types/ViewType';

export const MainContentTabs = () => {
    const tabs = [
        ViewType.HOME,
        ViewType.COMPOSITION,
        ViewType.RESOURCE_NETWORK,
        ViewType.MISSION,
        ViewType.MAPPING,
    ]
    const viewTypeToString = (viewType:ViewType) => {
        if (viewType === ViewType.RESOURCE_NETWORK) {
            return "Resource Network";
        } else if (viewType === ViewType.MISSION) {
            return "Mission";
        } else if (viewType === ViewType.COMPOSITION) {
            return "Composition Graph";
        } else if (viewType === ViewType.MAPPING) {
            return "Mapping";
        } else if (viewType === ViewType.HOME) {
            return "Home";
        }
    }
    return (
                <div
                    className="col main-col"
                    style={{
                        width: '75%',
                        height: '3.5rem',
                        fontStyle: 'bold',
                        verticalAlign: 'top',
                        display: 'inline-block',
                        backgroundColor: 'black',
                        fontFamily: 'Trebuchet MS',
                    }}
                >
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        style={{
                            color: 'white',
                            height: '100%',
                            backgroundColor: 'black',
                            border: '1px solid black',
                        }}
                    >
                        {tabs.map((tab:ViewType) => (
                            <Tab
                                key={uuidv4()}
                                eventKey={tab.toString()}
                                title={viewTypeToString(tab)}
                                style={{
                                    color: 'white',
                                    padding: '1rem',
                                    fontSize: '1.5rem',
                                    height: '3rem',
                                }}
                            >
                                <div
                                    className={`tab-${tab.toString()}`}
                                >
                                    {getLayout(tab)}
                                </div>
                            </Tab>
                        ))}
                    </Tabs>
                </div>
    )
}