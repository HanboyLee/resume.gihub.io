import React from "react";
import * as Mtl from "@mui/material";
import profile from "../../asset/images/profile.jpg";
import styled from "styled-components";
import { introduce, experience, education, skills, products, learning } from "../../stores/datas";
//components
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
                </Mtl.Grid>
                <Mtl.Grid item xs={12} md={8}>
                    <IntroduceContent elevation={3}>
                        <Mtl.Box className="nameBox" flex={1}>
                            <Mtl.Typography variant="h3">李升翰</Mtl.Typography>
                            <Mtl.Typography component={"div"} variant="h6">
                                Han
                            </Mtl.Typography>
                        </Mtl.Box>
                        <Mtl.Box flex={1} className="introduceBox">
                            <Subject datas={introduce} />
                            <Mtl.Typography variant="body1">{introduce.content}</Mtl.Typography>
                        </Mtl.Box>
                        <Mtl.Box flex={1}></Mtl.Box>
                    </IntroduceContent>
                </Mtl.Grid>
            </Mtl.Grid>
            <TimeLines datas={experience} />
            <TimeLines datas={education} />
            <Skills datas={skills} />
            <Product datas={products} />
            <Learning datas={learning} />
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
    height: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    & > .nameBox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-top: ${({ theme }) => theme.spacing(2)};
        padding-bottom: ${({ theme }) => theme.spacing(2)};

        @media (min-width: 600px) {
            justify-content: center;
        }
        & > div {
            padding-top: ${({ theme }) => theme.spacing(2)};
            padding-left: ${({ theme }) => theme.spacing(1)};
            color: #888;
        }
    }
    & > .introduceBox {
        @media (min-width: 600px) {
            text-align: center;
        }
    }
`;

export default Home;
