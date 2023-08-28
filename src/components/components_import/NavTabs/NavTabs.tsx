/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconsLight4 } from "../../icons/IconsLight4";
import "./style.css";

interface Props {
  showAdd: boolean;
  tabName: string;
  property1: "selected" | "default";
  className: any;
  icon: JSX.Element;
}

export const NavTabs = ({
  showAdd = true,
  tabName = "Composition Graph",
  property1,
  className,
  icon = <IconsLight4 className="icons-light-4" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`nav-tabs ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="composition-graph">{tabName}</div>
      {showAdd && <>{icon}</>}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "selected",
        };
    }
  }

  if (state.property1 === "selected") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

NavTabs.propTypes = {
  showAdd: PropTypes.bool,
  tabName: PropTypes.string,
  property1: PropTypes.oneOf(["selected", "default"]),
};
