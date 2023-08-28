/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconGridView = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-grid-view ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="24"
        id="mask0_334_20049"
        maskUnits="userSpaceOnUse"
        style={{maskType: "alpha"}}
        width="24"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#D9D9D9" height="24" width="24" />
      </mask>
      <g className="g" mask="url(#mask0_334_20049)">
        <path
          className="path"
          d="M3 11V3H11V11H3ZM3 21V13H11V21H3ZM13 11V3H21V11H13ZM13 21V13H21V21H13Z"
          fill="#E7E2D9"
        />
      </g>
    </svg>
  );
};
