import React from 'react';

class PlayGame extends React.Component {
    constructor() {
        super();

        this.state = {
            sessionDetails: null,
        };

        this.getSessionDetails = this.getSessionDetails.bind(this);
    }

    getSessionDetails = async () => {
        const sessionID = this.props.match.params.sessionID;
        const result = await fetch(`/api/sessions/getSessionDetails/` + sessionID, {
            method: 'get',
        });
        const body = await result.json();
        this.setState({ sessionDetails: body });
    }

    componentDidMount() {
        this.getSessionDetails();
    }

    render() {
        const { sessionDetails } = this.state;

        return (
            <React.Fragment>
                <h1>{sessionDetails.gameName}</h1>
            </React.Fragment>
        );
    }
}

export default PlayGame;