
import IconType from "../../../assets/icon/IconType";
import QuickStartButton from "./QuickstartButton";
import QuickStartHeader from "./QuickstartHeader";

export const QuickStartPanel = () => {
    return (
        <>
            <QuickStartHeader />
            <QuickStartButton
                label={'Composition Graph'}
                iconType={IconType.COMP}
            />
            <QuickStartButton
                label={'Mission Graph'}
                iconType={IconType.MISSION}
            />
            <QuickStartButton
                label={'Resource Network'}
                iconType={IconType.RESOURCE}
            />
        </>
    )
}
export default QuickStartPanel;