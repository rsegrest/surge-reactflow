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
    return (
                <div
                    className="col main-col"
                    style={{
                        width: '75%',
                        display: 'inline-block',
                        verticalAlign: 'top',
                        height: '3.5rem',
                    }}
                >
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        style={{
                            height: '100%',
                            color: 'white',
                            border: '1px solid black',
                            backgroundColor: 'gray',
                        }}
                    >
                        {tabs.map((tab:ViewType) => (
                            <Tab
                                key={uuidv4()}
                                eventKey={tab.toString()}
                                title={tab.toString()}
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