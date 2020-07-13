import React from 'react';
import WebDev from './webDev.js';
import GameDev from './gameDev.js';
import TDModeling from './tdModeling.js';

class Projects extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {
            webDevEnabled,
            gameDevEnabled,
            tDModelingEnabled
        } = this.props;
        return (
            <div>
                <h1>Early projects</h1>
                {!webDevEnabled && !gameDevEnabled && !tDModelingEnabled
                    ? <h2>Please select a sub category above</h2>
                    : null}
                {webDevEnabled ? <WebDev /> : null}
                {gameDevEnabled ? <GameDev /> : null}
                {tDModelingEnabled ? <TDModeling /> : null}
            </div>
        );
    }
}

export default Projects;