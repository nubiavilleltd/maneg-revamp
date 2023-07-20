import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            home page
            <Link to='/about'>About</Link>
            <Link to='/event'>Event</Link>
        </div>
    );
}

export default Home;
