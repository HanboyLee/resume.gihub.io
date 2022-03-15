import React from "react";
import { Box, Grid, Typography, Paper, useTheme } from "@mui/material";
import styled from "styled-components";
//components
import Subject from "./Subject";

const Skills = ({ datas }) => {
    return (
        <SkillBox>
            <Subject datas={datas} />
            <Grid container textAlign={"center"} justifyContent={"space-evenly"}>
                {datas.content.map((data) => (
                    <SkillItem key={data.id} data={data} />
                ))}
            </Grid>
        </SkillBox>
    );
};
const SkillBox = styled(Box)`
    padding-top: ${({ theme }) => theme.spacing(5)};
`;

const SkillItem = ({ data }) => {
    const theme = useTheme();
    return (
        <Grid item paddingY={3} sm={5} xs={11}>
            <Paper style={{ padding: 10 }} elevation={5}>
                <SkillItemTitle style={theme.shape} variant="h6">
                    {data.skill}
                </SkillItemTitle>
                <SkillDetail container>
                    {data.content.map((item, index) => (
                        <Grid xs={12} sm={5} className="text" item key={index} style={theme.typography.body2}>
                            {item}
                        </Grid>
                    ))}
                </SkillDetail>
            </Paper>
        </Grid>
    );
};

const SkillItemTitle = styled(Typography)`
    display: inline-block;
    padding: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.palette.background.default};
    background-color: ${({ theme }) => theme.palette.text.primary};
`;
const SkillDetail = styled(Grid)`
    justify-content: center;
    min-height: 100px;
    & .text {
        padding-top: ${({ theme }) => theme.spacing(0.5)};
        padding-bottom: ${({ theme }) => theme.spacing(0.5)};
        letter-spacing: 0.5px !important;
    }
`;

export default Skills;
