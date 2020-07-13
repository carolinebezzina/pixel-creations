import React from 'react';

class Now extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="left-column">
                <h1>Now</h1>
                <p>Well, if you're on this website, then that means my latest project is complete.</p>
                <p>Recently I noticed that there has been a gap in my knowledge: how to build a website from scratch, and deploy it to a hosting service. I lay awake one night and thought "I'm going to create an online portfolio". So I got out of bed, registered a domain name, signed up for web hosting, and got to work. I chose to use this as an opportunity to teach myself how to create a ReactJS app from scratch, including installing all necessary packages, and working out a deployment process. The experience so far has been challenging (and at times frustrating), but it has been exciting and rewarding.</p>
            </div>
        );
    }
}

export default Now;