import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import './index.css';
import Welcome from './welcome.js';
import Arthur from './profiles/arthur/intro.js';
import Caroline from './profiles/caroline/intro.js';
import Aaron from './profiles/aaron/intro.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#A0FFFF',
      main: '#66FCF1',
      dark: '#16C8BE',
      contrastText: '#000',
    },
    secondary: {
      light: '#FFDB96',
      main: '#FFA967',
      dark: '#C87A3A',
      contrastText: '#000',
    },
  },
});

const routing = (
  <ThemeProvider theme={theme}>
    <Router>
      <Container maxWidth="lg">
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
      </Container>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(routing, document.getElementById('root'));