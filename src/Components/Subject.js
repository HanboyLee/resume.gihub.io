import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
const Subject = ({ datas }) => {
    return (
        <TitleBox className="titleBox">
            <Typography component={"div"} variant="h4">
                {datas.title}
            </Typography>
            <Typography component={"div"} variant="h4">
                {datas.enTitle}
            </Typography>
        </TitleBox>
    );
};

export default Subject;

const TitleBox = styled(Box)`
    padding-top: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    display: flex;
    align-items: center;
    justify-content: center;
    & > :nth-child(1) {
        padding-left: ${({ theme }) => theme.spacing(5)};
    }
    & > :nth-child(2) {
        padding-left: ${({ theme }) => theme.spacing(3)};
        color: #ccc;
    }
`;
