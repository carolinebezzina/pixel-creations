import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import Button from '@material-ui/core/Button';

import CarolineProfileImage from './resources/caroline/caroline-profile.jpg';
import ArthurProfileImage from './resources/arthur/arthur-profile.jpg';
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
                        <div className="centered">
                            <h1>Hello {usersName}!</h1>
                            <h2>Pleased to meet you.</h2>
                            <p>Who would you like to learn about?</p>
                            <table className="profile-grid">
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
                                                <Button variant="outlined" color="secondary">Programmer</Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to='/arthur'>
                                                <h2>Arthur</h2>
                                                <img
                                                    className="photo"
                                                    src={ArthurProfileImage}
                                                    width="250px"
                                                    height="250px"
                                                />
                                                <Button variant="outlined" color="secondary">Artist / Game Designer</Button>
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
                                                <Button variant="outlined" color="secondary">Programmer / 3D Modeler</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="centered">
                            <h1>Welcome!</h1>
                            <h2>Before we begin, please enter your first name.</h2>
                            <p>Hi, my name is&nbsp;&nbsp;
                                <input type="text" id="usersName" name="usersName" onChange={e => this.handleChange(e)}></input>&nbsp;
                                <Button onClick={this.introduceUser} variant="outlined" color="secondary">Wave &#9995;</Button>
                            </p>
                            {errors ? <p>C'mon, don't be shy...</p> : null}
                        </div>
                    )}
            </div>
        );
    }
}

export default Welcome;