
'use client'

import React from 'react';
import TimelineComponent from './TimelineComponent';
import RoomComponent from './RoomComponent';
import './ScheduleComponent.css'; 
const ScheduleComponent = () => {
    return (
        <div className="schedule-container" >
            <div className="rooms-section">
                <RoomComponent />
            </div>
            <br />
            <div className="timeline-section">
                <TimelineComponent />
            </div>
        </div>
    );
};

export default ScheduleComponent;
