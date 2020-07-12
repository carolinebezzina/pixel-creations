import React from 'react';
import {Link} from 'react-router-dom';

class BackToHome extends React.Component {
    render() {
        return (
            <Link to="/">Back To Home</Link>
        );
    }
}

export default BackToHome;