import React, {useEffect, useState} from "react";
import './Home.css'
import axios from "axios";
import {Link} from "react-router-dom";

function Home() {
    const [hottestPost, setHottestPost] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result.data.data.children);
                setHottestPost(result.data.data.children);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <section>
                <h2>Hottest posts</h2>
                <p>on Reddit right now</p>
            </section>
            <article className="post-card">
                {hottestPost.length > 0 && <>
                    <h3>{hottestPost[0].data.title}</h3>
                    <h5><Link to path='https://www.reddit.com/r/memes/about.json'> {hottestPost[0].data.subreddit_name_prefixed}</Link></h5>
                    <p>Comments: {hottestPost[0].data.num_comments}</p>
                    <p>Ups: {hottestPost[0].data.ups}</p>
                </>
                }

            </article>
        </>
    );
}

export default Home;