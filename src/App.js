// @flow
import React from 'react';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import pages here
import Index from './pages/index.js';
import Greet from './pages/Greet.js';
import Generate from './pages/Generate.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Index {...props} />} />
        <Route
          exact
          path="/generate"
          render={(props) => <Generate {...props} />}
        />
        <Route exact path="/:name" render={(props) => <Greet {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default hot(App);
