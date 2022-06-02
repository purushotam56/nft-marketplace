import React from "react";

import HelpIcon from "@mui/icons-material/Help";

const HelpLabel = ({ label }) => {
  return (
    <>
      {label} <HelpIcon />
    </>
  );
};

export default HelpLabel;
