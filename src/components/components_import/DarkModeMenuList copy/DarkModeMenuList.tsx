/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconsLight7 } from "../../icons/IconsLight7";
import "./style.css";

interface Props {
  showDate: boolean;
  dates: string;
  text: string;
  effect: "focused" | "pressed" | "hover" | "enabled";
  className: any;
  icon: JSX.Element;
}

export const DarkModeMenuList = ({
  showDate = true,
  dates = "Date",
  text = "Label",
  effect,
  className,
  icon = <IconsLight7 className="icons-light-7" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    effect: effect || "enabled",
  });

  return (
    <div
      className={`dark-mode-menu-list effect-1-${state.effect} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="div">
        <div className="icon-label">
          {icon}
          <div className="text-wrapper">{text}</div>
        </div>
        {showDate && <div className="date">{dates}</div>}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.effect === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          effect: "hover",
        };
    }
  }

  if (state.effect === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          effect: "enabled",
        };
    }
  }

  if (state.effect === "pressed") {
    switch (action) {
      case "click":
        return {
          effect: "enabled",
        };
    }
  }

  if (state.effect === "focused") {
    switch (action) {
      case "click":
        return {
          effect: "pressed",
        };
    }
  }

  return state;
}

DarkModeMenuList.propTypes = {
  showDate: PropTypes.bool,
  dates: PropTypes.string,
  text: PropTypes.string,
  effect: PropTypes.oneOf(["focused", "pressed", "hover", "enabled"]),
};
