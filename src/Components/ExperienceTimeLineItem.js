import React from "react";
import {
    TimelineOppositeContent,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from "@mui/lab";
import { Typography } from "@mui/material";

const ExperienceTimeLineItem = ({ data }) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                {data.startsAt} ~ {data.endsAt}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6" component="span">
                    {data.area}
                </Typography>
                {data.content.map((text, index) => (
                    <Typography key={index}>{text}</Typography>
                ))}
            </TimelineContent>
        </TimelineItem>
    );
};

export default ExperienceTimeLineItem;
