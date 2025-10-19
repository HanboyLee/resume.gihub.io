import { Divider, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <>
            <Divider sx={{ pt: 5 }} />
            <FooterContiner textAlign={"center"} variant="body2">
                {`Copyright © ${new Date().getFullYear()} 简历`}
            </FooterContiner>
        </>
    );
};
const FooterContiner = styled(Typography)`
    padding: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.palette.text.secondary};
`;
export default Footer;
