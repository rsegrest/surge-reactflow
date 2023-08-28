/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsLight20 } from "../../icons/IconsLight20";
import { IconsLight21 } from "../../icons/IconsLight21";
import { IconsLight22 } from "../../icons/IconsLight22";
import { DarkModeMenuList } from "../DarkModeMenuList";
import "./style.css";

interface Props {
  menuTitle: string;
  className: any;
  divClassName: any;
  darkModeMenuListText: string;
  darkModeMenuListIcon: JSX.Element;
  darkModeMenuListText1: string;
  override: JSX.Element;
  darkModeMenuListText2: string;
  darkModeMenuListIcon1: JSX.Element;
}

export const SideMenu = ({
  menuTitle = "Menu",
  className,
  divClassName,
  darkModeMenuListText = "Label",
  darkModeMenuListIcon = <IconsLight20 className="icon-instance-node" />,
  darkModeMenuListText1 = "Label",
  override = <IconsLight21 className="icon-instance-node" />,
  darkModeMenuListText2 = "Label",
  darkModeMenuListIcon1 = <IconsLight22 className="icon-instance-node" />,
}: Props): JSX.Element => {
  return (
    <div className={`side-menu ${className}`}>
      <div className="title">
        <div className={`menu ${divClassName}`}>{menuTitle}</div>
      </div>
      <DarkModeMenuList
        className="dark-mode-menu-list-instance"
        effect="enabled"
        icon={darkModeMenuListIcon}
        showDate={false}
        text={darkModeMenuListText} dates={""}      />
      <DarkModeMenuList
        className="dark-mode-menu-list-instance"
        effect="enabled"
        icon={override}
        showDate={false}
        text={darkModeMenuListText1} dates={""}      />
      <DarkModeMenuList
        className="dark-mode-menu-list-instance"
        effect="enabled"
        icon={darkModeMenuListIcon1}
        showDate={false}
        text={darkModeMenuListText2} dates={""}      />
    </div>
  );
};

SideMenu.propTypes = {
  menuTitle: PropTypes.string,
  darkModeMenuListText: PropTypes.string,
  darkModeMenuListText1: PropTypes.string,
  darkModeMenuListText2: PropTypes.string,
};
