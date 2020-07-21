import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import BackToHome from '../../common/backToHome.js';
import History from './history.js';
import Skills from './skills.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';

class Arthur extends React.Component {
    constructor() {
        super();

        this.state = {
            historyEnabled: false,
            projectsEnabled: false,
            nowEnabled: false,
            resumeEnabled: false
        };
    }

    enableSection(historyEnabled, skillsEnabled, portfolioEnabled, contactEnabled) {
        this.setState({ historyEnabled: historyEnabled });
        this.setState({ skillsEnabled: skillsEnabled });
        this.setState({ portfolioEnabled: portfolioEnabled });
        this.setState({ contactEnabled: contactEnabled });
    }

    render() {
        const {
            historyEnabled,
            skillsEnabled,
            portfolioEnabled,
            contactEnabled,
        } = this.state;

        return (
            <div>
                <BackToHome />
                <div>
                    <h1>Arthur</h1>
                    <p></p>
                    <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => this.enableSection(true, false, false, false)}
                        >
                            History
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => this.enableSection(false, true, false, false)}
                        >
                            Skills
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => this.enableSection(false, false, true, false)}
                        >
                            Porfolio
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => this.enableSection(false, false, false, true)}
                        >
                            Contact
                        </Button>
                    </ButtonGroup>
                    {historyEnabled ? <History /> : null}
                    {skillsEnabled ? <Skills /> : null}
                    {portfolioEnabled ? <Portfolio /> : null}
                    {contactEnabled ? <Contact /> : null}
                </div>
            </div>
        );
    }
}

export default Arthur;