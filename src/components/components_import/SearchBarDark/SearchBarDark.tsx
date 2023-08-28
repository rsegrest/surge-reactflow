/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsLight27 } from "../../icons/IconsLight27";
import "./style.css";

interface Props {
  show1StTrailingIcon: boolean;
  search: string;
  placeholderText: string;
  show2NdTrailingIcon: boolean;
  className: any;
  icon: JSX.Element;
}

export const SearchBarDark = ({
  show1StTrailingIcon = true,
  search = "Hinted search text",
  placeholderText = "Hinted search text",
  show2NdTrailingIcon,
  className,
  icon = <IconsLight27 className="icons-light" />,
}: Props): JSX.Element => {
  return (
    <div className={`search-bar-dark ${className}`}>
      <div className="state-layer">
        <div className="content">
          <div className="supporting-text">Hinted search text</div>
        </div>
        {icon}
      </div>
    </div>
  );
};

SearchBarDark.propTypes = {
  show1StTrailingIcon: PropTypes.bool,
  search: PropTypes.string,
  placeholderText: PropTypes.string,
  show2NdTrailingIcon: PropTypes.bool,
};
