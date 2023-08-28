/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsLight1 } from "../../icons/IconsLight1";
import { IconsLight2 } from "../../icons/IconsLight2";
import { IconsLight3 } from "../../icons/IconsLight3";
import { IconHomeFill } from "../../icons/IconHomeFill";
import { NavTabs } from "../NavTabs";
import "./style.css";

interface Props {
  property1: "dashboard" | "main";
  className: any;
  homeDashClassName: any;
  icon: JSX.Element;
}

export const TopNav = ({
  property1,
  className,
  homeDashClassName,
  icon = <IconHomeFill className="IconHomeFill" />,
}: Props): JSX.Element => {
  return (
    <div className={`top-nav ${property1} ${className}`}>
      <div className="text-wrapper">Brand</div>
      <div className="tabs">
        <div className={`home-dash ${homeDashClassName}`}>{icon}</div>
        {property1 === "main" && (
          <>
            <NavTabs
              className="nav-tabs-instance"
              icon={<IconsLight1 className="icons-light" />}
              property1="default"
              tabName="Composition Graph" showAdd={false}            />
            <NavTabs
              className="nav-tabs-instance"
              icon={<IconsLight2 className="icons-light" />}
              property1="default"
              tabName="Resource Network" showAdd={false}            />
            <NavTabs className="nav-tabs-instance" property1="default" showAdd={false} tabName="Mission Graph" icon={undefined} />
            <NavTabs className="nav-tabs-instance" property1="default" showAdd={false} tabName="Mapping" icon={undefined} />
            <NavTabs className="instance-node" property1="default" showAdd={false} tabName="Dyreqt Run" icon={undefined} />
          </>
        )}
      </div>
    </div>
  );
};

TopNav.propTypes = {
  property1: PropTypes.oneOf(["dashboard", "main"]),
};
