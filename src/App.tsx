import React, { FC, useState } from 'react';

import { YM } from 'dateFormats';
import CalendarBody from 'components/CalendarBody';
import CalendarHeader from 'components/CalendarHeader'

const App: FC = () => {
  const [ym, setYM] = useState<YM>({year: new Date().getFullYear(), month: new Date().getMonth() + 1});

  return (
    <>
      <CalendarHeader ym={ym} setYM={setYM} />
      <CalendarBody />
    </>
  )
}

export default App;
