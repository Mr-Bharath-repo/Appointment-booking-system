'use client'

import React from 'react';

const TimelineComponent = ({ startHour = 9, endHour = 17 }) => {
    const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i);

    return (
        <div className="timeline">
            {hours.map((hour) => (
                <div key={hour} className="timeline-hour">
                    {`${hour}:00 ${hour < 12 ? 'AM' : 'PM'}`}
                </div>
            ))}
        </div>
    );
};

export default TimelineComponent;
