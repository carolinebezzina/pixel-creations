import React from 'react';
import BackToHome from '../../common/backToHome.js';

class Arthur extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <BackToHome />
                <div className="container">
                    <h1>Arthur</h1>
                    <p>
                        *insert info on Arthur here*
                    </p>
                </div>
            </div>
        );
    }
}

export default Arthur;