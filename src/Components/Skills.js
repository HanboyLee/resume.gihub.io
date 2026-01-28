import React from "react";
import { Box, Grid, Typography, Paper, useTheme } from "@mui/material";
import styled from "styled-components";
//components
import Subject from "./Subject";

const Skills = ({ datas }) => {
    return (
        <SkillBox>
            <Subject datas={datas} />
            <Grid container spacing={3} textAlign={"center"} justifyContent={"center"}>
                {datas.content.map((data) => (
                    <SkillItem key={data.id} data={data} />
                ))}
            </Grid>
        </SkillBox>
    );
};

const SkillBox = styled(Box)`
    padding-top: ${({ theme }) => theme.spacing(4)};
`;

const SkillItem = ({ data }) => {
    const theme = useTheme();
    return (
        <Grid item paddingY={2} xs={12} sm={6} md={4}>
            <Card elevation={3}>
                <SkillItemHeader style={theme.shape}>
                    <SkillItemTitle variant="h6">
                        {data.skill}
                    </SkillItemTitle>
                </SkillItemHeader>
                <SkillDetail container>
                    {data.content.map((item, index) => (
                        <Grid xs={12} className="text" item key={index}>
                            <SkillTag>{item}</SkillTag>
                        </Grid>
                    ))}
                </SkillDetail>
            </Card>
        </Grid>
    );
};

const Card = styled(Paper)`
    padding: ${({ theme }) => theme.spacing(2.5)};
    height: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    background: linear-gradient(145deg, #ffffff 0%, #fafbfc 100%);
    border: 2px solid transparent;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        border-color: rgba(99, 102, 241, 0.2);
    }
`;

const SkillItemHeader = styled(Box)`
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(1.5)};
    background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
    border-radius: 12px;
`;

const SkillItemTitle = styled(Typography)`
    display: inline-block;
    padding: 0;
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 0.5px;
`;

const SkillDetail = styled(Grid)`
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
    padding: ${({ theme }) => theme.spacing(1)} 0;

    & .text {
        display: flex;
        justify-content: center;
    }
`;

const SkillTag = styled(Box)`
    padding: ${({ theme }) => theme.spacing(0.75)} ${({ theme }) => theme.spacing(1.5)};
    background: rgba(99, 102, 241, 0.08);
    border-radius: 8px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text.primary};
    transition: all 0.2s ease;
    border: 1px solid rgba(99, 102, 241, 0.15);

    &:hover {
        background: rgba(99, 102, 241, 0.15);
        border-color: rgba(99, 102, 241, 0.3);
        transform: scale(1.02);
    }
`;

export default Skills;
