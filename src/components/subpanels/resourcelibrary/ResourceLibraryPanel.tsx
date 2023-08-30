import ResourceLibraryHeader from './ResourceLibraryHeader';
import ResourceLibraryList from './ResourceLibraryList';
import BaseButton from '../../button/BaseButton';
import IconType from '../../../assets/icon/IconType';

export const ResourceLibraryPanel = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '20rem',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
            }}
        >
            <ResourceLibraryHeader />
            <ResourceLibraryList libraries={[
                'States', 'Events', 'Elements'
            ]} />
            <BaseButton
                buttonLabel='Import Files'
                backgroundColor='black'
                textColor='cyan'
                borderColor='gray'
                iconType={IconType.UP}
            ></BaseButton>
        </div>
    );
}
export default ResourceLibraryPanel;