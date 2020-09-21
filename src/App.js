import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";
import Albums from "./Albums";
import Album from "./Album";
import Menu from "./Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/posts/:postId">
          <Post />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route path="/albums/:albumId">
          <Album />
        </Route>
        <Route path="/albums">
          <Albums />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
