import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import CarolineProfileImage from './resources/caroline/caroline-profile.jpg';
import AaronProfileImage from './resources/aaron/aaron-profile.jpg';

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            userIntroduced: cookie.load('usersName') !== '',
            usersName: cookie.load('usersName'),
            errors: false
        };

        this.introduceUser = this.introduceUser.bind(this);
    }

    componentWillMount() {
        if (cookie.load('usersName') === undefined) {
            cookie.save('usersName', '', { path: '/' });
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    introduceUser() {
        const { usersName } = this.state;

        if (usersName === '' || usersName === null) {
            this.setState({ errors: true });
        } else {
            this.setState({ userIntroduced: true });
            cookie.save('usersName', usersName, { path: '/' });
        }
    }

    render() {
        const { userIntroduced, usersName, errors } = this.state;
        return (
            <div className="container">
                {userIntroduced
                    ? (
                        <div>
                            <h1>Hello {usersName}!</h1>
                            <h2>Pleased to meet you.</h2>
                            <p>Who would you like to learn about?</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to='/caroline'>
                                                <h2>Caroline</h2>
                                                <img
                                                    className="photo"
                                                    src={CarolineProfileImage}
                                                    width="250px"
                                                    height="250px"
                                                />
                                                <br />
                                                <h3>Programmer</h3>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to='/arthur'>
                                                <h2>Arthur</h2>
                                                <br />
                                                <h3>Artist / Game Designer</h3>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to='/aaron'>
                                                <h2>Aaron</h2>
                                                <img
                                                    className="photo"
                                                    src={AaronProfileImage}
                                                    width="250px"
                                                    height="250px"
                                                />
                                                <br />
                                                <h3>Programmer / 3D Modeler</h3>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
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