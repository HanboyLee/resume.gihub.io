import React from "react";
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from "@mui/lab";
import { Typography } from "@mui/material";

const EducationTimeLineItem = ({ data }) => {
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
                <Typography variant="h6" component="div">
                    {data.school}
                </Typography>
                <Typography variant="body2" component="div">
                    {data.department}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

export default EducationTimeLineItem;
