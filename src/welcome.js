import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            userIntroduced: false,
            usersName: '',
            errors: false
        };

        this.introduceUser = this.introduceUser.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    introduceUser() {
        const { usersName } = this.state;
        if (usersName === '') {
            this.setState({ errors: true });
        } else {
            this.setState({ userIntroduced: true });
        }
    }

    render() {
        const { userIntroduced, usersName, errors } = this.state;
        return (
            <div>
                {userIntroduced
                    ? (
                        <div>
                            <h1>Hello {usersName}!</h1>
                            <h2>Pleased to meet you.</h2>
                            <p>Who would you like to learn about?</p>
                            <table>
                                <tr>
                                    <td>
                                        <Link to='/caroline'>
                                            Caroline
                                            <br />
                                            Programmer
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to='/arthur'>
                                            Arthur
                                            <br />
                                            Artist / Game Designer
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to='/aaron'>
                                            Aaron
                                            <br />
                                            Programmer
                                        </Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    ) : (
                        <div>
                            <h1>Welcome!</h1>
                            <h2>Before we begin, please enter your first name.</h2>
                            <p>Hi, my name is&nbsp;&nbsp;
                                <input type="text" id="usersName" name="usersName" onChange={e => this.handleChange(e)}></input>&nbsp;
                                <button onClick={this.introduceUser}>Wave &#9995;</button>
                            </p>
                            {errors ? <p>C'mon, don't be shy...</p> : null}
                        </div>
                    )}
            </div>
        );
    }
}

export default Welcome;