import React from 'react';
import WebDev from './webDev.js';
import GameDev from './gameDev.js';
import TDModeling from './tdModeling.js';

class Projects extends React.Component {
    constructor() {
        super();

        this.state = {
            webDevEnabled: false,
            gameDevEnabled: false,
            tDModelingEnabled: false
        };
    }

    enableSection(webDevEnabled, gameDevEnabled, tDModelingEnabled) {
        this.setState({ webDevEnabled: webDevEnabled });
        this.setState({ gameDevEnabled: gameDevEnabled });
        this.setState({ tDModelingEnabled: tDModelingEnabled });
    }

    render() {
        const {
            webDevEnabled,
            gameDevEnabled,
            tDModelingEnabled
        } = this.state;
        return (
            <div>
                <h1>Projects</h1>
                <div>
                    <button onClick={() => this.enableSection(true, false, false)}>Web Development</button>
                    <button onClick={() => this.enableSection(false, true, false)}>Game Development</button>
                    <button onClick={() => this.enableSection(false, false, true)}>3D Modeling</button>
                </div>
                {webDevEnabled ? <WebDev /> : null}
                {gameDevEnabled ? <GameDev /> : null}
                {tDModelingEnabled ? <TDModeling /> : null}
            </div>
        );
    }
}

export default Projects;