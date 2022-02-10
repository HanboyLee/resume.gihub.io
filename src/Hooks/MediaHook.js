import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
const Context = React.createContext();
const MediaProvider = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    return <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>;
};

/**
 *
 * @param {direction} example {down, up, only,...}
 * @param {pointkey} example {xs, md, lg, xl}
 */
export const useMediahandle = ({ direction, pointkey }) => {
    const theme = useTheme();
    const isMedia = useMediaQuery(theme.breakpoints[direction](pointkey));
    return isMedia;
};

// export const useModalShow = () => [React.useContext(Context).open, React.useContext(Context).setOpen];

export default MediaProvider;
