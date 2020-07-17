import React from 'react';
import Grid from '@material-ui/core/Grid';

class Now extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid item xs={9}>
                <h1>Now</h1>
                <p>Well, if you're on this website, then that means you've already seen my latest project.</p>
                <p>Recently I noticed that there has been a gap in my knowledge: how to build a website from scratch, and deploy it to a hosting service. I lay awake one night and thought "I'm going to create an online portfolio". So I got out of bed, registered a domain name, signed up for web hosting, and got to work. I chose to use this as an opportunity to teach myself how to create a ReactJS app from scratch, including installing all necessary packages, and working out a deployment process. The experience so far has been challenging (and at times frustrating), but it has been exciting and rewarding.</p>
                <p>During my time in lockdown I have also been completing an online course: Harvard's CS50 Introduction to Computer Science. This will then lead to a certificate in Mobile Apps, Artificial Intelligence, Game Development or Web Programming.</p>
                <p>I am actively looking for work, so if there are any opportunities that I may be suitable for, please don't hesitate to get in contact. My resume and contact details can be found in the 'Resume / Contact' tab.</p>
            </Grid>
        );
    }
}

export default Now;