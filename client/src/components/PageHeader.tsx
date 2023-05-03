import { Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      {" "}
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h1">
        {subtitle}
      </Typography>
    </>
  );
};

export default PageHeader;
