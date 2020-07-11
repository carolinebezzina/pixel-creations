import React from 'react';

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            userIntroduced: false,
            usersName: ''
        };

        this.introduceUser = this.introduceUser.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    introduceUser({ target }) {
        this.setState({ userIntroduced: true });
    }

    render() {
        const { userIntroduced, usersName } = this.state;
        return (
            <div>
                {userIntroduced
                    ? (<h1>Hello {usersName}</h1>)
                    : (
                        <div>
                            <h1>Welcome!</h1>
                            <h2>Before we begin, please enter your first name</h2>
                            <p>Hi, my name is&nbsp;
                                <input type="text" id="usersName" name="usersName" onChange={e => this.handleChange(e)}></input>
                                <button onClick={this.introduceUser}>Wave &#9995;</button>
                            </p>
                        </div>
                    )}
            </div>
        );
    }
}

export default Welcome;