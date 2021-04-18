import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Auth from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">

    <Auth />
      <Switch>
        {/* <Route path="/auth" exact component={Auth} /> */}
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;