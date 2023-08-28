/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconsLight } from "../../icons/IconsLight";
import "./style.css";

interface Props {
  text: string;
  property1: "selected" | "default";
  className: any;
  icon: JSX.Element;
}

export const QuickCards = ({
  text = "Title",
  property1,
  className,
  icon = <IconsLight className="icons-light-instance" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`quick-cards ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {icon}
      <div className="title">{text}</div>
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

QuickCards.propTypes = {
  text: PropTypes.string,
  property1: PropTypes.oneOf(["selected", "default"]),
};
