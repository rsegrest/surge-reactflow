/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsLight2 } from "../../icons/IconsLight2";
import { IconsLight3 } from "../../icons/IconsLight3";
import { IconsLight4 } from "../../icons/IconsLight4";
import { IconsLight5 } from "../../icons/IconsLight5";
import { IconsLight6 } from "../../icons/IconsLight6";
import { DarkModeButton } from "../DarkModeButton";
import { DarkModeMenuList } from "../DarkModeMenuList";
import "./style.css";

interface Props {
  className: any;
  darkModeButtonEffect: string;
  darkModeButtonIcon: JSX.Element;
  override: JSX.Element;
  subheadingClassName: any;
  darkModeMenuListText: string;
  darkModeMenuListDates: string;
  darkModeMenuListIcon: JSX.Element;
  darkModeMenuListText1: string;
  darkModeMenuListDates1: string;
  darkModeMenuListIcon1: JSX.Element;
  darkModeMenuListText2: string;
  darkModeMenuListDates2: string;
  darkModeMenuListIcon2: JSX.Element;
}

export const RecentFilesList = ({
  className,
  darkModeButtonEffect = "enabled",
  darkModeButtonIcon = <IconsLight2 className="icon-instance-node" />,
  override = <IconsLight3 className="icon-instance-node" />,
  subheadingClassName,
  darkModeMenuListText = "Label",
  darkModeMenuListDates = "Date",
  darkModeMenuListIcon = <IconsLight4 className="icon-instance-node" />,
  darkModeMenuListText1 = "Label",
  darkModeMenuListDates1 = "Date",
  darkModeMenuListIcon1 = <IconsLight5 className="icon-instance-node" />,
  darkModeMenuListText2 = "Label",
  darkModeMenuListDates2 = "Date",
  darkModeMenuListIcon2 = <IconsLight6 className="icon-instance-node" />,
}: Props): JSX.Element => {
  return (
    <div className={`recent-files-list ${className}`}>
      <div className="filters">
        <div className="titles">
          <div className="text-wrapper-2">Recent:</div>
          <DarkModeButton
            className="dark-mode-button-instance"
            effect="enabled"
            labelTextClassName="design-component-instance-node"
            showIcons={false}
            style="text"
            text="Composition Graph"
          />
          <DarkModeButton
            className="dark-mode-button-instance"
            effect="enabled"
            labelTextClassName="design-component-instance-node"
            showIcons={false}
            style="text"
            text="Mission Graph"
          />
          <DarkModeButton
            className="dark-mode-button-instance"
            effect="enabled"
            labelTextClassName="design-component-instance-node"
            showIcons={false}
            style="text"
            text="Mapping"
          />
          <DarkModeButton
            className="dark-mode-button-instance"
            effect="enabled"
            labelTextClassName="design-component-instance-node"
            showIcons={false}
            style="text"
            text="Dyreqt Run"
          />
        </div>
        <div className="list-toggle">
       
          <DarkModeButton
            className="dark-mode-button-2"
            effect={darkModeButtonEffect}
            icon={darkModeButtonIcon}
            style="icon"
          />
          <DarkModeButton className="dark-mode-button-2" effect="enabled" icon={override} style="icon" label={""} text={""} menuText={""} showIcons={false} stateLayerClassName={undefined} />
        </div>
      </div>
      <div className={`subheading ${subheadingClassName}`}>
        <div className="text-wrapper-3">Name</div>
        <div className="text-wrapper-4">Date modified</div>
      </div>
      <div className="fil">
        <div className="fil-2">
          <DarkModeMenuList
            className="dark-mode-menu-list-instance"
            dates={darkModeMenuListDates}
            effect="enabled"
            icon={darkModeMenuListIcon}
            text={darkModeMenuListText}
          />
          <DarkModeMenuList
            className="dark-mode-menu-list-instance"
            dates={darkModeMenuListDates1}
            effect="enabled"
            icon={darkModeMenuListIcon1}
            text={darkModeMenuListText1}
          />
          <DarkModeMenuList
            className="dark-mode-menu-list-instance"
            dates={darkModeMenuListDates2}
            effect="enabled"
            icon={darkModeMenuListIcon2}
            text={darkModeMenuListText2}
          />
        </div>
      </div>
    </div>
  );
};

RecentFilesList.propTypes = {
  darkModeButtonEffect: PropTypes.string,
  darkModeMenuListText: PropTypes.string,
  darkModeMenuListDates: PropTypes.string,
  darkModeMenuListText1: PropTypes.string,
  darkModeMenuListDates1: PropTypes.string,
  darkModeMenuListText2: PropTypes.string,
  darkModeMenuListDates2: PropTypes.string,
};
