import React from 'react';

interface CalendarDisplayProps { 
  currentMonth: string,
  currentYear: string
}

function CalendarDisplay({ currentMonth, currentYear }: CalendarDisplayProps) {
  return (
    <>
      <h1>Calendar</h1>
      <p>{currentMonth} {currentYear}</p>
    </>
  );
}

export default CalendarDisplay;