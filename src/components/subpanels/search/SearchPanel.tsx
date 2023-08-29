import SearchHeader from './SearchHeader';
import SearchInputField from './SearchInputField';
import BaseButton from '../../button/BaseButton';
export const SearchPanel = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '12rem',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
            }}
        >
            <SearchHeader />
            <SearchInputField />
            <BaseButton buttonLabel={'+ New Project'} />
        </div>
    );
}
export default SearchPanel;