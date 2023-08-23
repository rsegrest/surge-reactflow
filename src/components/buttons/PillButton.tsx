import IconType from '../../types/IconType';
import ColorType from '../../types/ColorType';

interface PillButtonProps {
    label: string;
    icon: IconType;
    color: ColorType;
}
const PillButton = (args:PillButtonProps) => {
    return (
        <div>
            <h1>PillButton</h1>
        </div>
    );
}
export default PillButton;