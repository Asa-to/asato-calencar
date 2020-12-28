import React, { FC, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInScreen from 'components/signControl/Signin';

const App: FC = () => {

  return (
    <Switch>
      <Route exact path='/auth'>
        <SignInScreen />
      </Route>
    </Switch>
  )
}

export default App;
