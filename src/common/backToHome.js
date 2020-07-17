import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class BackToHome extends React.Component {
    render() {
        return (
            <Button
                variant="outlined"
                color="secondary">
                <Link to="/">
                    &#x2B05; Back to Home &#x1F3E0;
                </Link>
            </Button>
        );
    }
}

export default BackToHome;