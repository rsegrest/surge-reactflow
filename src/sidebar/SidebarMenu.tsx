import SearchPanel from "../subpanels/search/SearchPanel";
import ResourceLibraryPanel from "../subpanels/resourcelibrary/ResourceLibraryPanel";
import SettingsButton from "../button/SettingsButton";
export const SidebarMenu = () => {
    return (
        <div
            style={{
                width: '20%',
                height: '100vh',
                display: 'inline-block',
                backgroundColor: 'rgba(255,255,255,0.1)',
            }}
        >
            <SearchPanel />
            <ResourceLibraryPanel />
            <SettingsButton />
        </div>
    );
}
export default SidebarMenu;