
interface ResourceFileRowProps {
    filename: string;
}
const ResourceFileRow = (props:ResourceFileRowProps) => {
    return (
        <div>
            <p>{props.filename}</p>
        </div>
    )
}
export default ResourceFileRow;