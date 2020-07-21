import React from 'react';

class Portfolio extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Portfolio</h1>
                <iframe src="https://itch.io/embed/618650" height="167" width="552" frameborder="0">
                    <a href="https://wobbleblocks.itch.io/rough-ship">Rough Ship by Wobble Blocks</a>
                </iframe>
            </div>
        );
    }
}

export default Portfolio;