import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Subreddit() {
    const { subredditId } = useParams();

    useEffect(() => {
        async function getSubredditId() {
            try {

            } catch {

            }
        }
    })

    return (
        <>
            <p>Subreddit page</p>
            <p>{subredditId}</p>
            <p>Terug naar <Link to="/">Home</Link> </p>
        </>
    );
}

export default Subreddit;