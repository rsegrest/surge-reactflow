// import Image, { StaticImageData } from 'next/image';
import compIconImage from './comp_icon.png';
import dbIconImage from './db_icon.png';
import gridIconImage from './grid_icon.png';
import listIconImage from './list_icon.png';
import magnifierIconImage from './magnifier_icon.png';
import missionIconImage from './flow_icon.png';
import homeIcon from './home_icon.png';
import snakeIconImage from './snake_icon.png';
import upIconImage from './up_icon.png';
import IconType from './IconType';


export const Icon = ({size, iconType}:{
    size:number,
    iconType:IconType|string|null,
}) => {
    let iconSrc:any|null = null;
    let altText:string = '';
    if (iconType === IconType.COMP) {
        iconSrc = compIconImage;
        altText = 'composition icon';
    } else if (iconType === IconType.MISSION) {
        iconSrc = missionIconImage;
        altText = 'mission icon';
    } else if (iconType === IconType.RESOURCE) {
        iconSrc = snakeIconImage;
        altText = 'resource icon';
    } else if (iconType === IconType.LIST) {
        iconSrc = listIconImage;
        altText = 'list icon';
    } else if (iconType === IconType.GRID) {
        iconSrc = gridIconImage;
        altText = 'grid icon';
    } else if (iconType === IconType.DB) {
        iconSrc = dbIconImage;
        altText = 'data source icon';
    } else if (iconType === IconType.MAGNIFIER) {
        iconSrc = magnifierIconImage;
        altText = 'search icon';
    } else if (iconType === IconType.SNAKE) {
        iconSrc = snakeIconImage;
        altText = 'snake icon';
    } else if (iconType === IconType.UP) {
        iconSrc = upIconImage;
        altText = 'up icon';
    } else if (iconType === IconType.HOME) {
        iconSrc = homeIcon;
        altText = 'home icon';
    } else {
        // iconSrc = upIconImage;
        altText = 'undefined icon';
    }

    return (
        <img
            src={iconSrc}
            alt={altText}
            width={size}
        />
    )
}
export default Icon;