// @flow
import React from 'react';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import pages here
import Index from './pages/index.js';
const Greet = React.lazy(() => import('./pages/Greet.js'));
const Generate = React.lazy(() => import('./pages/Generate.js'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={(props) => <Index {...props} />} />
          <Route
            exact
            path="/generate"
            render={(props) => <Generate {...props} />}
          />
          <Route exact path="/:name" render={(props) => <Greet {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default hot(App);
