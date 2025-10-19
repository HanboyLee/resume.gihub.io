import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import Subject from "../../Components/Subject";
import QRCode from "qrcode.react";

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
        window.open(data.githubUrl, "_blank");
    };
    const onGitCoode = () => {
        window.open(data.codeUrl, "_blank");
    };
    return (
        <ProjectItem container>
            <Grid className="qrcodeWrap" item xs={12} sm={3}>
                <Box className="imgBox" onClick={onClick}>
                    <QRCode className="qrcode" level="H" value={data.githubUrl} />
                </Box>
            </Grid>
            <Grid item sm={5}>
                <Box>
                    <Typography onClick={onGitCoode} className="title" variant="h6">
                        {data.title}
                    </Typography>
                    <Typography variant="body1">技术栈：</Typography>
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
    padding-top: ${({ theme }) => theme.spacing(5)};
    margin: 0 auto;
    justify-content: center;
    & .qrcodeWrap {
        @media (max-width: 600px) {
            text-align: center;
        }
        .imgBox {
            margin: 0 auto;
            cursor: pointer;
            display: inline-block;
            .qrcode {
                width: 200px !important;
                height: 200px !important;
            }
        }
    }

    & .title {
        padding-top: ${({ theme }) => theme.spacing(1)};
        padding-bottom: ${({ theme }) => theme.spacing(3)};
        color: ${({ theme }) => theme.palette.primary.main};
        cursor: pointer;
        display: inline-block;
        :hover {
            color: ${({ theme }) => theme.palette.primary.light};
        }
        @media (max-width: 600px) {
            text-align: center;
        }
    }
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        li {
            flex-basis: 33%;
            padding: ${({ theme }) => theme.spacing(1)};
        }
    }
`;
export default Product;
