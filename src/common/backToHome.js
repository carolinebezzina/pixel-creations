import React from 'react';
import { Link } from 'react-router-dom';

class BackToHome extends React.Component {
    render() {
        return (
            <Link to="/">&#x2B05; Back to Home &#x1F3E0;</Link>
        );
    }
}

export default BackToHome;