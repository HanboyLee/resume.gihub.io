import React from "react";
import * as Mtl from "@mui/material";
import profile from "../../asset/images/profile.jpg";
import styled from "styled-components";
import { introduce, experience, education, skills, products, contact } from "../../stores/datas";
//components
import Contact from "./Contact";
import TimeLines from "../../Components/TimeLines";
import Skills from "../../Components/Skills";
import Product from "./Product";
import Subject from "../../Components/Subject";
import Footer from "./Footer";
const Home = () => {
    return (
        <Mtl.Box paddingY={4}>
            <Mtl.Grid container spacing={4}>
                <Mtl.Grid item xs={12} md={4}>
                    <ImageBox>
                        <img className="img" src={profile} alt="profile" />
                    </ImageBox>
                    <Contact datas={contact} />
                </Mtl.Grid>
                <Mtl.Grid item xs={12} md={8}>
                    <IntroduceContent elevation={4}>
                        <Mtl.Grid container className="infoContent">
                            <Mtl.Grid item xs={12} className="nameBox">
                                <Mtl.Typography variant="h3">李升翰</Mtl.Typography>
                                <Mtl.Typography className="enName" variant="h6">
                                    Han Sheng-Han
                                </Mtl.Typography>
                            </Mtl.Grid>
                            <Mtl.Grid className={"infoBox"} item xs={12} sm={6}>
                                <Mtl.Typography component={"div"} variant="body1">
                                    📅 出生年月：1988.04
                                </Mtl.Typography>
                                <Mtl.Typography component={"div"} variant="body1">
                                    🏠 籍贯：中国台湾
                                </Mtl.Typography>
                            </Mtl.Grid>
                            <Mtl.Grid className={"infoBox"} item xs={12} sm={6}>
                                <Mtl.Typography component={"div"} variant="body1">
                                    👤 性别：男
                                </Mtl.Typography>
                                <Mtl.Typography component={"div"} variant="body1">
                                    💼 职位：前端工程师
                                </Mtl.Typography>
                            </Mtl.Grid>
                        </Mtl.Grid>
                        <Mtl.Box flex={1} className="introduceBox" sx={{ mt: 3 }}>
                            <Subject datas={introduce} />
                            <Mtl.Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                {introduce.content}
                            </Mtl.Typography>
                        </Mtl.Box>
                    </IntroduceContent>
                </Mtl.Grid>
            </Mtl.Grid>

            <Mtl.Box sx={{ mt: 6 }}>
                <TimeLines datas={experience} />
            </Mtl.Box>

            <Mtl.Box sx={{ mt: 6 }}>
                <TimeLines datas={education} />
            </Mtl.Box>

            <Mtl.Box sx={{ mt: 6 }}>
                <Skills datas={skills} />
            </Mtl.Box>

            <Mtl.Box sx={{ mt: 6 }}>
                <Product datas={products} />
            </Mtl.Box>

            <Footer />
        </Mtl.Box>
    );
};

const ImageBox = styled(Mtl.Box)`
    padding: 4%;
    margin: 0 auto;
    width: 300px;
    position: relative;
    & > .img {
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: 24px;
        border: 4px solid #fff;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.02);
            box-shadow: 0 30px 60px rgba(99, 102, 241, 0.25);
        }
    }
`;

const IntroduceContent = styled(Mtl.Paper)`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(4)};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    background: linear-gradient(145deg, #ffffff 0%, #fafbfc 100%);
    height: 100%;

    & > .infoContent {
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: ${({ theme }) => theme.spacing(3)};

        .nameBox {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: ${({ theme }) => theme.spacing(2)} 0;
            margin-bottom: ${({ theme }) => theme.spacing(2)};

            .enName {
                padding-top: ${({ theme }) => theme.spacing(0.5)};
                color: ${({ theme }) => theme.palette.text.secondary};
                letter-spacing: 2px;
                text-transform: uppercase;
                font-size: 0.9rem;
                font-weight: 500;
            }
        }

        .infoBox {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: ${({ theme }) => theme.spacing(1)};

            @media (max-width: 600px) {
                align-items: center;
            }

            & > div {
                display: inline-block;
                padding: ${({ theme }) => theme.spacing(0.75)} ${({ theme }) => theme.spacing(1.5)};
                background: rgba(99, 102, 241, 0.08);
                border-radius: 8px;
                font-weight: 500;
            }
        }
    }

    & > .introduceBox {
        padding-top: ${({ theme }) => theme.spacing(2)};
        border-top: 2px solid rgba(99, 102, 241, 0.1);
    }
`;

export default Home;
