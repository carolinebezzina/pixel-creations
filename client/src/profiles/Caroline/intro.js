import React from 'react';
import Grid from '@material-ui/core/Grid';

import BackToHome from '../../common/backToHome.js';
import History from './history.js';
import WebDev from './web-dev.js';
import GameDev from './game-dev.js';
import TDModeling from './td-modeling.js';
import Now from './now.js';
import Resume from './resume.js';
import carolineCoffeeImage from '../../media/caroline/caroline-coffee.jpg';
import MenuListComposition from './menu.js';

class caroline extends React.Component {
    constructor() {
        super();

        this.state = {
            historyEnabled: false,
            webDevEnabled: false,
            gameDevEnabled: false,
            tDModelingEnabled: false,
            nowEnabled: false,
            resumeEnabled: false
        };

        this.enableSection = this.enableSection.bind(this);
        this.enableSubSection = this.enableSubSection.bind(this);
    }

    enableSection(historyEnabled, projectsEnabled, nowEnabled, resumeEnabled) {
        this.setState({ historyEnabled: historyEnabled });
        this.setState({ projectsEnabled: projectsEnabled });
        this.setState({ nowEnabled: nowEnabled });
        this.setState({ resumeEnabled: resumeEnabled });
    }

    enableSubSection(webDevEnabled, gameDevEnabled, tDModelingEnabled) {
        this.setState({ webDevEnabled: webDevEnabled });
        this.setState({ gameDevEnabled: gameDevEnabled });
        this.setState({ tDModelingEnabled: tDModelingEnabled });
    }

    render() {
        const {
            historyEnabled,
            webDevEnabled,
            gameDevEnabled,
            tDModelingEnabled,
            nowEnabled,
            resumeEnabled
        } = this.state;

        return (
            <React.Fragment>
                <BackToHome />
                <Grid container spacing={10}>
                    <Grid item xs={12} lg={9}>
                        <h1>Caroline</h1>
                        <p>Hi there! My name is Caroline. I'm in my late 20's and I live in South Yarra, Victoria.</p>
                        <p>I've spent the last three and a half years working as a Software Developer. I'm currently looking for work in Melbourne or remotely as a software, web, or game developer.</p>
                        <p>On most mornings you're likely to find me wrapped up in a blanket with a large cup of coffee in hand (I'm more of a night-owl than a morning person). On weekends and evenings I like to binge watch TV shows or grab a great video game and play it for the fifth time. *cough* Skyrim *cough*</p>
                        <p>If you'd like to know a bit more about me, select a category below.</p>
                        <br /><br />
                        <MenuListComposition
                            enableSection={this.enableSection}
                            enableSubSection={this.enableSubSection}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <img className="photo" src={carolineCoffeeImage} width="270px" height="300px" />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        {historyEnabled ? <History /> : null}
                        {webDevEnabled ? <WebDev /> : null}
                        {gameDevEnabled ? <GameDev /> : null}
                        {tDModelingEnabled ? <TDModeling /> : null}
                        {nowEnabled ? <Now /> : null}
                        {resumeEnabled ? <Resume /> : null}
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default caroline;