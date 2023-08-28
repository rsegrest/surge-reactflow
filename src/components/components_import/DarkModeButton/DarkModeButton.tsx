/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconsLight } from "../../icons/IconsLight";
import { IconsLight10 } from "../../icons/IconsLight10";
import { IconsLight13 } from "../../icons/IconsLight13";
import { IconsLight16 } from "../../icons/IconsLight16";
import { IconsLight19 } from "../../icons/IconsLight19";
import { IconsLight7 } from "../../icons/IconsLight7";
import "./style.css";

interface Props {
  menuText: string;
  text: string;
  showIcons: boolean;
  label: string;
  effect: "enabled" | "pressed" | "focused" | "hover" | "disabled";
  style: "text" | "filled" | "outline" | "icon";
  className: any;
  icon: JSX.Element;
  stateLayerClassName: any;
}

export const DarkModeButton = ({
  menuText = "Title",
  text = "Label",
  showIcons = true,
  label = "Label",
  effect,
  style,
  className,
  icon = <IconsLight className="icons-light-2" />,
  stateLayerClassName,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    effect: effect || "enabled",
    style: style || "filled",
  });

  return (
    <div
      className={`dark-mode-button ${state.style} ${state.effect} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        return (
         console.log("test click")
        )
        dispatch("click");
      }}
    >
      <div className={`div ${stateLayerClassName}`}>
        {showIcons && (
          <>
            <>
              {state.effect === "enabled" && state.style === "icon" && <IconsLight7 className="icons-light-2" />}

              {state.effect === "hover" && state.style === "icon" && <IconsLight10 className="icons-light-2" />}

              {state.effect === "pressed" && state.style === "icon" && <IconsLight13 className="icons-light-2" />}

              {state.effect === "disabled" && state.style === "icon" && <IconsLight16 className="icons-light-2" />}

              {state.effect === "focused" && state.style === "icon" && <IconsLight19 className="icons-light-2" />}

              {["filled", "outline", "text"].includes(state.style) && <>{icon}</>}
            </>
          </>
        )}

        {["filled", "outline", "text"].includes(state.style) && (
          <div className="label-text">
            {state.style === "filled" && <>{label}</>}

            {["outline", "text"].includes(state.style) && <>{text}</>}
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.effect === "enabled" && state.style === "filled") {
    switch (action) {
      case "mouse_enter":
        return {
          effect: "hover",
          style: "filled",
        };
    }
  }

  if (state.effect === "hover" && state.style === "filled") {
    switch (action) {
      case "mouse_leave":
        return {
          effect: "enabled",
          style: "filled",
        };
    }
  }

  if (state.effect === "focused" && state.style === "filled") {
    switch (action) {
      case "click":
        return {
          effect: "pressed",
          style: "filled",
        };
    }
  }

  if (state.effect === "pressed" && state.style === "filled") {
    switch (action) {
      case "click":
        return {
          effect: "enabled",
          style: "filled",
        };
    }
  }

  if (state.effect === "enabled" && state.style === "outline") {
    switch (action) {
      case "mouse_enter":
        return {
          effect: "hover",
          style: "outline",
        };
    }
  }

  if (state.effect === "hover" && state.style === "outline") {
    switch (action) {
      case "mouse_leave":
        return {
          effect: "enabled",
          style: "outline",
        };
    }
  }

  if (state.effect === "enabled" && state.style === "text") {
    switch (action) {
      case "mouse_enter":
        return {
          effect: "hover",
          style: "text",
        };
    }
  }

  if (state.effect === "hover" && state.style === "text") {
    switch (action) {
      case "mouse_leave":
        return {
          effect: "enabled",
          style: "text",
        };
    }
  }

  if (state.effect === "enabled" && state.style === "icon") {
    switch (action) {
      case "mouse_enter":
        return {
          effect: "hover",
          style: "icon",
        };
    }
  }

  if (state.effect === "hover" && state.style === "icon") {
    switch (action) {
      case "mouse_leave":
        return {
          effect: "enabled",
          style: "icon",
        };
    }
  }

  if (state.effect === "pressed" && state.style === "outline") {
    switch (action) {
      case "click":
        return {
          effect: "enabled",
          style: "outline",
        };
    }
  }

  if (state.effect === "pressed" && state.style === "text") {
    switch (action) {
      case "click":
        return {
          effect: "enabled",
          style: "text",
        };
    }
  }

  if (state.effect === "pressed" && state.style === "icon") {
    switch (action) {
      case "click":
        return {
          effect: "enabled",
          style: "icon",
        };
    }
  }

  if (state.effect === "focused" && state.style === "outline") {
    switch (action) {
      case "click":
        return {
          effect: "pressed",
          style: "outline",
        };
    }
  }

  if (state.effect === "focused" && state.style === "text") {
    switch (action) {
      case "click":
        return {
          effect: "pressed",
          style: "text",
        };
    }
  }

  if (state.effect === "focused" && state.style === "icon") {
    switch (action) {
      case "click":
        return {
          effect: "pressed",
          style: "icon",
        };
    }
  }

  return state;
}

DarkModeButton.propTypes = {
  menuText: PropTypes.string,
  text: PropTypes.string,
  showIcons: PropTypes.bool,
  label: PropTypes.string,
  effect: PropTypes.oneOf(["enabled", "pressed", "focused", "hover", "disabled"]),
  style: PropTypes.oneOf(["text", "filled", "outline", "icon"]),
};
