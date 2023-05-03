import React from "react";
import Typography from "@mui/material/Typography";

const MuiTypography = () => {
  return (
    <>
      <Typography
        variant="h4"
        component="p"
        sx={{ color: "red", fontWeight: "bold" }}
      >
        One
      </Typography>
      <p>Tow</p>
    </>
  );
};

export default MuiTypography;
