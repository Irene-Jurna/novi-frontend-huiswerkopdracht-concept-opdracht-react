import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom'
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";

function App() {

    return (
        <>
            <nav>
                <li><NavLink to="/" exact activeClassName="active-link">Hottest posts</NavLink></li>
                <li><NavLink to="/subreddit/:subredditId" activeClassName="active-link">Reddit</NavLink></li>
            </nav>
            <h1>Reddit</h1>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/subreddit/:subredditId">
                    <Subreddit/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
