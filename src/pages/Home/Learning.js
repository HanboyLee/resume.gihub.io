import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import Subject from "../../Components/Subject";

const Learning = ({ datas }) => {
    return (
        <WorkBox>
            <Subject datas={datas} />
            <Typography variant="body1" component={"div"}>
                {datas.text}
            </Typography>
        </WorkBox>
    );
};

export default Learning;

const WorkBox = styled(Box)`
    padding-top: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(5)};
    & > div {
        text-align: center;
    }
`;
