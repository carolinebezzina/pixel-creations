import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Home from './home.js';
import Play from './play.js';

const routing = (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/play">Play</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));