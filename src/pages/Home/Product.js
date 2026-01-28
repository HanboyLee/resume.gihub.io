import React from "react";
import { Box, Grid, Typography, Chip, IconButton, Card, CardContent } from "@mui/material";
import styled from "styled-components";
import { GitHub, OpenInNew } from "@mui/icons-material";
import Subject from "../../Components/Subject";
import QRCode from "qrcode.react";

const Product = ({ datas }) => {
    return (
        <ProductBox>
            <Subject datas={datas} />
            <Grid container spacing={3}>
                {datas.content.map((data) => (
                    <Grid item xs={12} md={6} key={data.id}>
                        <ProjectCard data={data} />
                    </Grid>
                ))}
            </Grid>
        </ProductBox>
    );
};

const ProjectCard = ({ data }) => {
    return (
        <ProjectItem elevation={3}>
            <CardContent>
                <HeaderBox>
                    <Box>
                        <Typography
                            className="title"
                            variant="h5"
                            onClick={() => window.open(data.githubUrl, "_blank")}
                        >
                            {data.title}
                        </Typography>
                        {data.description && (
                            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, lineHeight: 1.6 }}>
                                {data.description}
                            </Typography>
                        )}
                    </Box>
                    <Box>
                        <IconButton
                            size="small"
                            onClick={() => window.open(data.githubUrl, "_blank")}
                            title="在线预览"
                        >
                            <OpenInNew fontSize="small" />
                        </IconButton>
                        <IconButton
                            size="small"
                            onClick={() => window.open(data.codeUrl, "_blank")}
                            title="查看源码"
                        >
                            <GitHub fontSize="small" />
                        </IconButton>
                    </Box>
                </HeaderBox>

                <TechStackBox>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        技术栈
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {data.art.map((item, i) => (
                            <TechChip key={i} label={item} size="small" variant="outlined" />
                        ))}
                    </Box>
                </TechStackBox>

                <QRCodeBox>
                    <Box className="qrWrapper">
                        <QRCode className="qrcode" level="H" value={data.githubUrl} />
                        <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary' }}>
                            扫码访问
                        </Typography>
                    </Box>
                </QRCodeBox>
            </CardContent>
        </ProjectItem>
    );
};

const ProductBox = styled(Box)`
    padding-top: ${({ theme }) => theme.spacing(4)};
`;

const ProjectItem = styled(Card)`
    height: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        border-color: rgba(99, 102, 241, 0.2);
    }
`;

const HeaderBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.spacing(2)};

    .title {
        color: ${({ theme }) => theme.palette.primary.main};
        cursor: pointer;
        font-weight: 700;
        transition: color 0.2s ease;

        &:hover {
            color: ${({ theme }) => theme.palette.primary.light};
        }
    }
`;

const TechStackBox = styled(Box)`
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const TechChip = styled(Chip)`
    font-weight: 500;
    font-size: 0.8rem;
`;

const QRCodeBox = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacing(2)};
    padding-top: ${({ theme }) => theme.spacing(2)};
    border-top: 1px solid rgba(99, 102, 241, 0.1);

    .qrWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .qrcode {
            width: 120px !important;
            height: 120px !important;
            padding: 8px;
            background: #fff;
            border-radius: 8px;
            transition: transform 0.2s ease;

            &:hover {
                transform: scale(1.05);
            }
        }
    }
`;

export default Product;
