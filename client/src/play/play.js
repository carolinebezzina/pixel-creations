import React from 'react';
import Grid from '@material-ui/core/Grid';

import BackToHome from '../common/backToHome.js';

class Play extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid xs={12} lg={8}>
                <BackToHome />
                <h1>Play</h1>
            </Grid>
        );
    }
}

export default Play;