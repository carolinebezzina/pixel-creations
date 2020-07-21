import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Snackbar from '@material-ui/core/Snackbar';

class JoinOrHost extends React.Component {
    constructor() {
        super();

        this.state = {
            fullJoinLink: '',
            partialJoinLink: '',
            snackbarOpen: false
        };

        this.createSession = this.createSession.bind(this);
        this.copyLink = this.copyLink.bind(this);
    }

    createSession = async () => {
        const { selectedGame } = this.props;

        let result, body, sessionID;

        do {
            sessionID = Math.random().toString(36).substring(2, 15);

            result = await fetch(`/api/sessions/getSessionDetails/` + sessionID, {
                method: 'get',
            });

            body = await result.json();
        }
        while (body.length !== 0);

        await fetch('/api/sessions/createSession/', {
            method: 'post',
            body: JSON.stringify({ sessionID: sessionID, gameID: selectedGame.gameID }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const partialJoinLink = `play/${selectedGame.gameID}/${sessionID}`;
        const fullJoinLink = `${window.location.href}/${selectedGame.gameID}/${sessionID}`;

        this.setState({ partialJoinLink, fullJoinLink });
    };

    copyLink() {
        var copyText = document.getElementById("joinLink");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");

        this.setState({ snackbarOpen: true });
        setTimeout(() => {
            this.setState({
                snackbarOpen: false
            })
        }, 4000);
    }

    render() {
        const { fullJoinLink, partialJoinLink, snackbarOpen } = this.state;
        const { selectedGame } = this.props;

        return (
            <React.Fragment>
                <h1>{selectedGame.gameName}</h1>
                {fullJoinLink !== ''
                    ? <div>
                        <p>Share this link:
                            <br />
                            <input
                                type="text"
                                value={fullJoinLink}
                                id="joinLink"
                            />&nbsp;
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={this.copyLink}>
                                Copy Link
                            </Button>
                        </p>
                        <Link to={partialJoinLink}>
                            <Button
                                variant="outlined"
                                color="secondary">
                                Start Game
                            </Button>
                        </Link>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={snackbarOpen}
                            message="Copied to clipboard!"
                        />
                    </div>
                    : <ButtonGroup>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={this.createSession}>
                            Host Game
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary">
                            Join Game
                        </Button>
                    </ButtonGroup>}
            </React.Fragment>
        );
    }
}

export default JoinOrHost;