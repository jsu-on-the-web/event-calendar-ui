import React from 'react';
import CalendarSquare from '../CalendarSquare';

interface CalendarDisplayProps { 
  currentMonth: string,
  currentYear: string
}

function CalendarDisplay({ currentMonth, currentYear }: CalendarDisplayProps) {
  return (
    <>
      <h1>Calendar</h1>
      <p>{currentMonth} {currentYear}</p>
      <CalendarSquare />
    </>
  );
}

export default CalendarDisplay;