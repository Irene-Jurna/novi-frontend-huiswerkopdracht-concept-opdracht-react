import React, {useEffect, useState} from "react";
import './Home.css'
import axios from "axios";
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png';

function Home() {
    const [hottestPosts, setHottestPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            setError('');

            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result.data.data.children);
                setHottestPosts(result.data.data.children);
            } catch (e) {
                console.error(e);
                setError(e);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <section className="header-container">
                <img src={logo} alt="Reddit logo" className="logo"/>
                <h1>Reddit</h1>
            </section>
            <section className="subheader-container">
                <h2>Hottest posts</h2>
                <h6>on Reddit right now</h6>
            </section>

            <section className="post-card-container">
            {hottestPosts.map((hottestPost) => {
                return (
                    <article className="post-card-item" key={hottestPost.data.id}>
                        <h3><Link to path={`www.reddit.com`}>{hottestPost.data.title}</Link></h3>
                        <h5><Link to
                                  path={`/subreddit/${hottestPost.data.subreddit}`}> {hottestPost.data.subreddit_name_prefixed}</Link>
                        </h5>
                        <p>Comments: {hottestPost.data.num_comments}</p>
                        <p>Ups: {hottestPost.data.ups}</p>
                    </article>
                )
            })}
            </section>
        </>
    );
}

export default Home;