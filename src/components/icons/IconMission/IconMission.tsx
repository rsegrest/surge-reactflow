/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconMission = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-mission ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="24"
        id="mask0_261_20197"
        maskUnits="userSpaceOnUse"
        style={{maskType: "alpha"}}
        width="24"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#D9D9D9" height="24" width="24" />
      </mask>
      <g className="g" mask="url(#mask0_261_20197)">
        <path
          className="path"
          d="M4 23V17H6.5V15H4V9H6.5V7H4V1H11V7H8.5V9H11V11H14V9H21V15H14V13H11V15H8.5V17H11V23H4ZM6 21H9V19H6V21ZM6 13H9V11H6V13ZM16 13H19V11H16V13ZM6 5H9V3H6V5Z"
          fill="#E7E2D9"
        />
      </g>
    </svg>
  );
};
