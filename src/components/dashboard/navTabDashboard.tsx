import React from "react";
import { TopNav } from "../components_import/TopNav";
// import { IconsLight6 } from "../icons/IconsLight6";
import { IconHomeFill } from "../icons/IconHomeFill";
import "../../style/dashboard.css";

export const TopNavScreen = (): JSX.Element => {
  return (
    <TopNav
      className="top-nav-instance"
      homeDashClassName="design-component-instance-node"
      icon={<IconHomeFill className="IconHomeFill" />}
      property1="dashboard"
    />
  );
};

export default TopNavScreen