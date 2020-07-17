import React from 'react';
import Grid from '@material-ui/core/Grid';

import BackToHome from '../../common/backToHome.js';

class Aaron extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid xs={8}>
                <BackToHome />
                <h1>Aaron</h1>
                <p>Hello there! I'm Aaron, I hail from Queensland! I currently reside in Melbourne, Victoria.</p>
                <p>I've had an interest in Game Design and Music for as long as I can remember, I made my first Game Maker game when I was around 6 or 7, and I've been playing guitar over 12 years. Since 2015 I've studied Music in University and Game Design in two other Universities!</p>
                <p>Most days you can find me playing guitar, writing music, or making/playing games.</p>
                <p>Once a week I participate in a Live Action Role-Play (LARP for short)!</p>
                <p>If you wish for more knowlege about me, select a category below.</p>
            </Grid>
        );
    }
}

export default Aaron;