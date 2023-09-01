import HeaderLogotype from "./components/topbar/HeaderLogotype";
import { NavLink } from "react-router-dom";
import Icon from "./assets/icon/Icon";
import IconType from "./assets/icon/IconType";
import SidebarMenu from "./components/sidebar/SidebarMenu";
import SearchPanel from "./components/subpanels/search/SearchPanel";
import ResourceLibraryPanel from "./components/subpanels/resourcelibrary/ResourceLibraryPanel";
import SettingsButton from "./components/button/SettingsButton";

export const SideContent = () => {

    return (
        <div
            className="col sidebar-col"
            style={{
                width: '25%',
                display: 'inline-block'
            }}
        >
            <div
                className="topbar-left-side"
                style={{
                    display: 'inline-block',
                    width: '100%',
                    height: '3.5rem',
                    borderBottom: '1px solid gray',
                    borderRight: '1px solid gray',
                }}
            >
                <div
                    className="logo-container"
                    style={{
                        position: 'relative',
                        paddingLeft: '1rem',
                        left: '0px',
                        width: '50%',
                        display: 'inline',
                        textAlign: 'left',
                    }}
                >
                    <HeaderLogotype />
                </div>
                <div
                    style={{
                        width: '10%',
                        display: 'inline',
                        paddingTop: '0.5rem',
                        float: 'right',
                        borderRight: '1px solid gray',
                    }}
                >
                    <NavLink
                        to="/home"
                        style={{
                            paddingBottom: '0.5rem',
                            backgroundColor: 'transparent',
                            borderColor: 'rgb(24,24,24)',
                            display: 'inline',

                        }}
                    >
                        <Icon iconType={IconType.HOME} size={20} />
                    </NavLink>
                </div>
            </div>
            <SidebarMenu
                panels={[
                    <SearchPanel />,
                    <ResourceLibraryPanel />,
                    <SettingsButton />,
                ]}
            />
        </div>
    )
}
export default SideContent;