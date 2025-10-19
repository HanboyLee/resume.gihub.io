import React from "react";
import { Timeline } from "@mui/lab";
import { Box } from "@mui/material";
import styled from "styled-components";
import ExperienceTimeLineItem from "./ExperienceTimeLineItem";
import EducationTimeLineItem from "./EducationTimeLineItem";

//components
import Subject from "./Subject";
const Experience = ({ datas }) => {
    const TimeItem = React.useMemo(() => (datas.isExp ? ExperienceTimeLineItem : EducationTimeLineItem), [datas.isExp]);

    return (
        <TimeLineBox>
            {/* 主題 */}
            <Subject datas={datas} />
            {/* 時間軸 */}
            <Timeline position="alternate">
                {datas.content.map((item) => (
                    <TimeItem key={item.id} data={item} />
                ))}
            </Timeline>
        </TimeLineBox>
    );
};

const TimeLineBox = styled(Box)`
    padding-top: ${({ theme }) => theme.spacing(5)};
`;

export default Experience;
