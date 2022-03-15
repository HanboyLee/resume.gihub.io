import { Divider, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <>
            <Divider sx={{ pt: 5 }} />
            <FooterContiner textAlign={"center"} variant="body1">
                Copyright &copy; 2022 简历
            </FooterContiner>
        </>
    );
};
const FooterContiner = styled(Typography)`
    padding: ${({ theme }) => theme.spacing(3)};
`;
export default Footer;
