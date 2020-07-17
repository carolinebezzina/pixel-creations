import React from 'react';
import Grid from '@material-ui/core/Grid';

class Skills extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid xs={8}>
                <h1>Skills</h1>
                <p>Efficient at Concept art, Character design, color theory, team leading.</p>
                <p>I am also very passionate about story writing and world building.</p>
                <p>I am capable with 3D Animation and 3D Modelling, and Texturing.</p>
            </Grid>
        );
    }
}

export default Skills;