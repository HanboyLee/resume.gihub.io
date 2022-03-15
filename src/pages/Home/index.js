import React from "react";
import * as Mtl from "@mui/material";
import profile from "../../asset/images/profile.jpg";
import styled from "styled-components";
import { introduce, experience, education, skills, products, learning, contact } from "../../stores/datas";
//components
import Contact from "./Contact";
import TimeLines from "../../Components/TimeLines";
import Skills from "../../Components/Skills";
import Product from "./Product";
import Subject from "../../Components/Subject";
import Learning from "./Learning";
import Footer from "./Footer";
const Home = () => {
    return (
        <Mtl.Box paddingY={3}>
            <Mtl.Grid container>
                <Mtl.Grid item xs={12} md={4}>
                    <ImageBox>
                        <img className="img" src={profile} alt="profile" />
                    </ImageBox>
                    <Contact datas={contact} />
                </Mtl.Grid>
                <Mtl.Grid item xs={12} md={8}>
                    <IntroduceContent elevation={3}>
                        <Mtl.Grid container className="infoContent">
                            <Mtl.Grid item xs={12} sm={5} className="nameBox">
                                <Mtl.Typography variant="h3">李升翰</Mtl.Typography>
                                <Mtl.Typography className="enName" variant="h6">
                                    Han
                                </Mtl.Typography>
                            </Mtl.Grid>
                            <Mtl.Grid className={"infoBox"} item xs={12} sm={5}>
                                <Mtl.Typography component={"div"} variant="body1">
                                    出生年月：1988.04
                                </Mtl.Typography>
                                <Mtl.Typography component={"div"} variant="body1">
                                    籍贯：中国台湾
                                </Mtl.Typography>
                                <Mtl.Typography component={"div"} variant="body1">
                                    性别：男
                                </Mtl.Typography>
                            </Mtl.Grid>
                        </Mtl.Grid>
                        <Mtl.Box flex={1} className="introduceBox">
                            <Subject datas={introduce} />
                            <Mtl.Typography variant="body1">{introduce.content}</Mtl.Typography>
                        </Mtl.Box>
                    </IntroduceContent>
                </Mtl.Grid>
            </Mtl.Grid>

            <TimeLines datas={experience} />
            <TimeLines datas={education} />
            <Skills datas={skills} />
            <Product datas={products} />
            {/* <Learning datas={learning} /> */}
            <Footer />
        </Mtl.Box>
    );
};

const ImageBox = styled(Mtl.Box)`
    padding: 2%;
    margin: 0 auto;
    width: 300px;
    & > .img {
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: 10px;
    }
`;
const IntroduceContent = styled(Mtl.Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > .infoContent {
        justify-content: center;
        align-items: center;
        text-align: center;
        .nameBox {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: ${({ theme }) => theme.spacing(2)};
            padding-bottom: ${({ theme }) => theme.spacing(2)};

            @media (min-width: 600px) {
                justify-content: center;
            }
            .enName {
                padding-top: ${({ theme }) => theme.spacing(2)};
                padding-left: ${({ theme }) => theme.spacing(1)};
                color: #888;
            }
        }
        .infoBox {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            @media (max-width: 600px) {
                align-items: center;
            }
            & > div {
                display: inline-block;
            }
        }
    }
    & > .introduceBox {
        @media (min-width: 600px) {
            text-align: center;
        }
    }
`;

export default Home;
