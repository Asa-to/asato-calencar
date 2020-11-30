import React, { FC, useState } from 'react';
import { Table } from 'react-bootstrap';

import { MyDate, DayOfTheWeek } from 'types';

const CalendarBoard: FC = () => {

  return (
    <>
      <ChangeMonthField />
      <Calendar date={date}/>
    </>
  )
}

export default CalendarBoard;