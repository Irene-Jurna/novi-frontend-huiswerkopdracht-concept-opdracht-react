import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";
import axios from "axios";

function Subreddit() {
    const { subredditId } = useParams();

   // Maak hier je GET request(met${subredditId}). https://www.reddit.com/r/$subredditId}/about.json

    useEffect(() => {
        async function fetchSubreddit() {

            try {
                const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(response);
            } catch (e) {
                console.error(e);
            }
        }

        fetchSubreddit();
    }, []);

    return (
        <>
            <p>Subreddit page</p>
            <p>{subredditId}</p>
            <p>Take me back <Link to="/">Home</Link> </p>
        </>
    );
}

export default Subreddit;