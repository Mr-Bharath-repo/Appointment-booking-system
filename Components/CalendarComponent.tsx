import React, { useState } from 'react';
import './CalendarComponent.css';

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const getStartOfWeek = (date: Date) => {
        const start = new Date(date);
        const day = start.getDay();
        const diff = start.getDate() - day + (day === 0 ? -6 : 1);
        start.setDate(diff);
        return start;
    };

    const getEndOfWeek = (date: Date) => {
        const start = getStartOfWeek(date);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return end;
    };

    const getMonthStart = (date: Date) => {
        const start = new Date(date);
        start.setDate(1);
        return start;
    };

    const getMonthEnd = (date: Date) => {
        const start = new Date(date);
        start.setMonth(start.getMonth() + 1);
        start.setDate(0);
        return start;
    };

    const startOfWeek = getStartOfWeek(selectedDate);
    const endOfWeek = getEndOfWeek(selectedDate);
    const monthStart = getMonthStart(selectedDate);
    const monthEnd = getMonthEnd(selectedDate);

    const handleDateClick = (date: Date) => {
        if (date.getDay() === 0 || date.getDay() === 6) return; 
        setSelectedDate(date);
    };

    const goToPreviousWeek = () => {
        const prevWeek = new Date(startOfWeek);
        prevWeek.setDate(startOfWeek.getDate() - 7);
        setSelectedDate(prevWeek);
    };

    const goToNextWeek = () => {
        const nextWeek = new Date(startOfWeek);
        nextWeek.setDate(startOfWeek.getDate() + 7);
        setSelectedDate(nextWeek);
    };

    const goToPreviousMonth = () => {
        const prevMonth = new Date(selectedDate);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        setSelectedDate(prevMonth);
    };

    const goToNextMonth = () => {
        const nextMonth = new Date(selectedDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setSelectedDate(nextMonth);
    };

    const weekDays = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        return date;
    });

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <button className="month-nav" onClick={goToPreviousMonth}>◄</button>
                <span>{`${monthStart.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}</span>
                <button className="month-nav" onClick={goToNextMonth}>►</button>
            </div>
            <div className="calendar-week-header">
                <button onClick={goToPreviousWeek}>Previous Week</button>
                <span>{`${startOfWeek.toDateString()} - ${endOfWeek.toDateString()}`}</span>
                <button onClick={goToNextWeek}>Next Week</button>
            </div>
            <div className="week-view">
                {weekDays.map((date, index) => (
                    <div
                        key={index}
                        className={`week-day ${date.getDay() === 0 || date.getDay() === 6 ? 'holiday' : ''}`}
                        onClick={() => handleDateClick(date)}
                        title={date.getDay() === 0 || date.getDay() === 6 ? 'Holiday' : ''}
                    >
                        <div className="day-name">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div
                            className={`day-date ${selectedDate.toDateString() === date.toDateString() ? 'selected' : ''}`}
                        >
                            {date.getDate()}
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default CalendarComponent;
