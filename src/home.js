import React from 'react';

function Home() {
    return (
        <div>
            <h1>Enter your name:</h1>
            <input type="text" id="name" name="name"></input>
            <button>Go &#8594;</button>
        </div>
    );
}

export default Home;