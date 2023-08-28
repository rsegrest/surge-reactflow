/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  dividerClassName: any;
  divider: string;
}

export const HorizontalInset = ({ className, dividerClassName, divider = "/img/divider.svg" }: Props): JSX.Element => {
  return (
    <div className={`horizontal-inset ${className}`}>
      <img className={`divider ${dividerClassName}`} alt="Divider" src={divider} />
    </div>
  );
};

HorizontalInset.propTypes = {
  divider: PropTypes.string,
};
