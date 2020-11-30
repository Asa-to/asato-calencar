import CalendarBoard from 'components/Calendar/CalendarBoard';
import React, { FC, useState, createContext } from 'react';

import { MyDate } from 'types';

const App: FC = () => {
  const [date, setDate] = useState<MyDate>({year: new Date().getFullYear(), month: new Date().getMonth() + 1});

  return (
    <>
      <MyHeader />
      <CalendarBoard />
    </>
  )
}

export default App;
