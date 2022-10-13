import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom'
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";

function App() {

    return (
        <>
            <nav className="nav-container">
                <li><NavLink to="/" exact activeClassName="active-link" className="nav-link">Hottest posts</NavLink></li>
                <li><NavLink to="/subreddit/:subredditId" activeClassName="active-link" className="nav-link">Reddit</NavLink></li>
            </nav>
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
