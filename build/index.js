import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Welcome from './welcome.js';
import Arthur from './profiles/arthur/intro.js';
import Caroline from './profiles/caroline/intro.js';
import Aaron from './profiles/aaron/intro.js';

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