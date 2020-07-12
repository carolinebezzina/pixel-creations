import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Welcome from './welcome.js';
import Arthur from './Arthur/intro.js';
import Caroline from './Caroline/intro.js';
import Aaron from './profiles/Aaron/intro.js';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/arthur">
          <Arthur />
        </Route>
        <Route path="/caroline">
          <Caroline />
        </Route>
        <Route path="/aaron">
          <Aaron />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));