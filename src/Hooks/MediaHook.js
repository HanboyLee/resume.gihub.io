import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
const Context = React.createContext();
const MediaProvider = ({ children }) => {
    return <Context.Provider value={{}}>{children}</Context.Provider>;
};

/**
 *
 * @param {direction} example,up,only,...
 * @param {pointkey} example xs md lg
 */
export const useMediahandle = ({ direction, pointkey }) => {
    const theme = useTheme();
    const isMedia = useMediaQuery(theme.breakpoints[direction](pointkey));
    return isMedia;
};

export default MediaProvider;
