/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconComposition = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-composition ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="24"
        id="mask0_261_20195"
        maskUnits="userSpaceOnUse"
        style={{maskType: "alpha"}}
        width="24"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#D9D9D9" height="24" width="24" />
      </mask>
      <g className="g" mask="url(#mask0_261_20195)">
        <path
          className="path"
          d="M3 22V15H6V11H11V9H8V2H16V9H13V11H18V15H21V22H13V15H16V13H8V15H11V22H3ZM10 7H14V4H10V7ZM5 20H9V17H5V20ZM15 20H19V17H15V20Z"
          fill="#E7E2D9"
        />
      </g>
    </svg>
  );
};
