import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Subject = ({ datas }) => {
    return (
        <TitleBox className="titleBox">
            <ChineseTitle variant="h4">{datas.title}</ChineseTitle>
            <EnglishTitle variant="h4">{datas.enTitle}</EnglishTitle>
        </TitleBox>
    );
};

export default Subject;

const TitleBox = styled(Box)`
    padding: ${({ theme }) => theme.spacing(3)} 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing(2)};

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
        border-radius: 2px;
    }
`;

const ChineseTitle = styled(Typography)`
    font-weight: 800;
    background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-right: ${({ theme }) => theme.spacing(2)};
`;

const EnglishTitle = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 1.75rem;
    opacity: 0.7;
`;
