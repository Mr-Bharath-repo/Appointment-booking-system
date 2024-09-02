'use client'
import React from 'react';
import CalendarComponent from '../Components/CalendarComponent';
import ScheduleComponent from '@/Components/ScheduleComponent';
import AppointmentComponent from '@/Components/AppointmentComponent';

const HomePage = () => {
    return (
        <div className="scheduler">
            <CalendarComponent />
            <ScheduleComponent />
            <AppointmentComponent />
        </div>
    );
};

export default HomePage;
