import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import Subject from "../../Components/Subject";

const Product = ({ datas }) => {
    return (
        <ProductBox>
            <Subject datas={datas} />
            {datas.content.map((data) => (
                <Project key={data.id} data={data} />
            ))}
        </ProductBox>
    );
};

const Project = ({ data }) => {
    const onClick = () => {
        window.location.assign(data.githubUrl);
    };
    return (
        <ProjectItem container>
            <Grid item xs={12} sm={5}>
                <Box className="imgBox" onClick={onClick}>
                    <img src={data.src} alt={data.title} />
                </Box>
            </Grid>
            <Grid item sm={5}>
                <Box>
                    <Typography className="title" variant="h6">
                        {data.title}
                    </Typography>
                    <Typography variant="body1">使用技术：</Typography>
                    <ul>
                        {data.art.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </Box>
            </Grid>
        </ProjectItem>
    );
};

const ProductBox = styled(Box)`
    padding-top: ${({ theme }) => theme.spacing(5)};
`;

const ProjectItem = styled(Grid)`
    width: 100%;
    padding-top: ${({ theme }) => theme.spacing(2)};
    margin: 0 auto;
    justify-content: center;
    & .imgBox {
        width: 50%;
        margin: 0 auto;
        cursor: pointer;
        & > img {
            width: 100%;
        }
    }
    & .title {
        padding-top: ${({ theme }) => theme.spacing(1)};
        padding-bottom: ${({ theme }) => theme.spacing(3)};
    }
    ul {
        list-style: none;
        & > li {
            padding: ${({ theme }) => theme.spacing(1)};
        }
    }
`;
export default Product;
