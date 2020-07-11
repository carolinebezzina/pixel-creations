import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Welcome from './welcome.js';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));