import { v4 as uuidv4 } from 'uuid';
export const SidebarMenu = (props:{
    setViewType:Function,
    panels:JSX.Element[],
}) => {
    return (
        <div
            style={{
                width: '20%',
                height: '100vh',
                display: 'inline-block',
                backgroundColor: 'rgba(255,255,255,0.1)',
            }}
        >
            {props.panels.map((panel: JSX.Element) => (
                <div
                    key={uuidv4()}
                >
                    {panel}
                </div>
            ))}
        </div>
    );
}
export default SidebarMenu;