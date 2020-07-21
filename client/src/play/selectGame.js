import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import JoinOrHost from './joinOrHost.js';
import { select } from 'react-cookies';

class SelectGame extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedGame: null,
            gameList: []
        };

        this.getGameList = this.getGameList.bind(this);
    }

    getGameList = async () => {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_API}`,
            headers: { 'content-type': 'application/json' },
            data: { number: '1234', message: 'test' }
        })
            .then(result => {
                console.log(result);
            })
            .catch(error => this.setState({ error: error.message }));

        const result = await fetch(`/api/games/getGamesList`, {
            method: 'get',
        });
        const body = await result.json();
        this.setState({ gameList: body });
    };

    componentDidMount() {
        this.getGameList();
    };

    render() {
        const { gameList, selectedGame } = this.state;

        return (
            <React.Fragment>
                {selectedGame
                    ? <JoinOrHost selectedGame={selectedGame} />
                    : <div>
                        <h1>Select Game</h1>
                        {gameList.map((game) =>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => {
                                    this.setState({ selectedGame: game });
                                }}>
                                {game.gameName}
                            </Button>
                        )}
                    </div>}
            </React.Fragment>
        );
    }
}

export default SelectGame;