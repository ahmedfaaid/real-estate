import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Listings from './pages/Listings/Listings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/add'>
          <Add />
        </Route>
        <Route path='/listings'>
          <Listings />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
