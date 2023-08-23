import IconType from "../../types/IconType";
interface OptionTileButtonProps {
    label: string;
    icon: IconType;
}
const OptionTileButton = (props: OptionTileButtonProps) => {
    return (
        <div className="option-tile-button">
            {props.label}
        </div>
    )
}
export default OptionTileButton;