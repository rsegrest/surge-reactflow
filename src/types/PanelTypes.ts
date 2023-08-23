const SEARCH_PANEL = 'SEARCH_PANEL';
const MAIN_PANEL = 'MAIN_PANEL';
// ... etc.
type PanelType = typeof SEARCH_PANEL | typeof MAIN_PANEL;
export default PanelType;