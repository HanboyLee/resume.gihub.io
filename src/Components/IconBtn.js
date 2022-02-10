import React from "react";
import { Icon, IconButton } from "@mui/material";
const IconBtn = ({ children }) => {
    return (
        <IconButton>
            <Icon>{children}</Icon>
        </IconButton>
    );
};

export default IconBtn;
