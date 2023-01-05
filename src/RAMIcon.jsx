import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { SvgIcon } from "@mui/material";

const RAMIcon = (props) => (
  <SvgIcon sx={props.sx}>
    <Logo />
  </SvgIcon>
);

export default RAMIcon;