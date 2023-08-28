// import React from "react";
import { DarkModeButton } from "../components_import/DarkModeButton";
import { HorizontalDarkFull } from "../components_import/HorizontalDarkFull";
import { SearchBarDark } from "../components_import/SearchBarDark";
import { SideMenu } from "../components_import/SideMenu";
import { IconsLight28 } from "../icons/IconsLight28";
import { IconsLight29 } from "../icons/IconsLight29";
import { IconsLight30 } from "../icons/IconsLight30";
import { IconsLight31 } from "../icons/IconsLight31";
import { IconsLight32 } from "../icons/IconsLight32";
import { IconsLight33 } from "../icons/IconsLight33";
import { IconsLight34 } from "../icons/IconsLight34";
import "../../style/dashboard.css";

export const DashboardSidePanel = () => {
  return (
    <div className="dashboard-side-panel">
      <div className="search">
        <div className="text-wrapper-2">Search DaaS</div>
        <SearchBarDark className="search-bar-dark-search-bar" icon={<IconsLight28 className="icons-light-3" />} search={""} show1StTrailingIcon={false} placeholderText={""} show2NdTrailingIcon={false} />
        <DarkModeButton
          className="dark-mode-button-instance"
          effect="enabled"
          icon={<IconsLight29 className="icons-light-3" />}
          label="New Project"
          style="filled" text={""} menuText={""} showIcons={false} stateLayerClassName={undefined}        />
        <HorizontalDarkFull className="horizontal-dark-full-width-dark" divider="src/components/svg_components/divider-2.svg" />
      </div>
      <SideMenu
        className="resource-library"
        darkModeMenuListIcon={<IconsLight30 className="icons-light-3" />}
        darkModeMenuListIcon1={<IconsLight32 className="icons-light-3" />}
        darkModeMenuListText="States"
        darkModeMenuListText1="Events"
        darkModeMenuListText2="Elements"
        divClassName="side-menu-instance"
        menuTitle="Resource Library"
        override={<IconsLight31 className="icons-light-3" />}
      />
      <div className="import-files-button">
        <DarkModeButton
          className="dark-mode-button-instance"
          effect="enabled"
          icon={<IconsLight33 className="icons-light-3" />}
          style="outline"
          text="Import Files" label={""} menuText={""} showIcons={false} stateLayerClassName={undefined}        />
        <HorizontalDarkFull className="horizontal-dark-full-instance" divider="src/components/svg_components/divider-2.svg" />
        <DarkModeButton
          className="dark-mode-button-2"
          effect="enabled"
          icon={<IconsLight34 className="icons-light-3" />}
          stateLayerClassName="design-component-instance-node"
          style="text"
          text="Settings" label={""} menuText={""} showIcons={false}        />
      </div>
    </div>
  );
};

export default DashboardSidePanel