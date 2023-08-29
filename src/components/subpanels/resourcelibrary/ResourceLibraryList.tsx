import ResourceLibraryRow from './ResourceLibraryRow';
interface ResourceLibraryListProps {
    // label='States',
    libraries: string[],
}
const ResourceLibraryList = (props:ResourceLibraryListProps) => {
    return props.libraries.map((library) => (
        <ResourceLibraryRow
            key={library}
            libraryName={library}
        />
    ))
}
export default ResourceLibraryList;