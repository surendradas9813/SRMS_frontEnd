import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';



const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
    
      <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/student" exact component={Navbar} /> 
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;