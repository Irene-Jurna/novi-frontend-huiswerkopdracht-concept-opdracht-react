import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Subreddit() {
    const { subredditId } = useParams();

   // Maak hier je GET request

    return (
        <>
            <p>Subreddit page</p>
            <p>{subredditId}</p>
            <p>Take me back <Link to="/">Home</Link> </p>
        </>
    );
}

export default Subreddit;