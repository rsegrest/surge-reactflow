import BaseButton from "./BaseButton"
import IconType from "../../assets/icon/IconType"

interface RecentListDisplayTypeButtonProps {
    isActive:boolean,
    listDisplayType:'list'|'grid',
}

const RecentListDisplayTypeButton = (props:RecentListDisplayTypeButtonProps) => {
    const { isActive, listDisplayType } = props;
    let backgroundColor = 'black';
    let borderColor = 'gray';
    let iconType = IconType.LIST;
    if (listDisplayType === 'grid') { iconType = IconType.GRID; }
    if (isActive) { backgroundColor = 'gray' }

    return (
        <BaseButton
            buttonLabel=""
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            textColor="white"
            iconType={iconType}
            paddingLeft={1.5}
            paddingRight={0.1}
        />
    )
}

export default RecentListDisplayTypeButton;