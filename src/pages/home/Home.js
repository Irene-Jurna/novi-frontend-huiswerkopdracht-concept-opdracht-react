import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <p>Homepage Reddit</p>
            <p>Ga <Link to="/subreddit/:subredditId">hier</Link> naar Reddit</p>
        </>
    );
}

export default Home;