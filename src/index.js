import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import './index.css';
import Welcome from './welcome.js';
import Arthur from './profiles/arthur/intro.js';
import Caroline from './profiles/caroline/intro.js';
import Aaron from './profiles/aaron/intro.js';
import Play from './play/play.js';

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
    <HashRouter>
      <Container maxWidth="lg">
        <Switch>
          <Route path="/caroline" component={Caroline} />
          <Route path="/arthur" component={Arthur} />
          <Route path="/aaron" component={Aaron} />
          <Route path="/play" component={Play} />
          <Route exact path="/" component={Welcome} />
        </Switch>
      </Container>
    </HashRouter>
  </ThemeProvider>
);

ReactDOM.render(routing, document.getElementById('root'));