import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";
import axios from "axios";
import './Subreddit.css'

function Subreddit() {
    const {subredditId} = useParams();
    const [subreddit, setSubreddit] = useState('');

    // Maak hier je GET request(met${subredditId}). https://www.reddit.com/r/$subredditId}/about.json

    useEffect(() => {
        async function fetchSubreddit() {

            try {
                const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(response.data.data);
                setSubreddit(response.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchSubreddit();
    }, []);

    return (
        <>
            <section className="header-container">
                <h1>r/{subredditId}</h1>
                <h6>Subreddit specifications</h6>
            </section>
            <section className="subreddit-container">
                <h3>Title</h3>
                <p>{subredditId}</p>
                <h3>Description</h3>
                <p>{subreddit.public_description}</p>
                <h3>Number of subscribers</h3>
                <p className="end-of-subreddit-page">{subreddit.subscribers}</p>
                <Link to="/">Take me back</Link>
            </section>
        </>
    );
}

export default Subreddit;