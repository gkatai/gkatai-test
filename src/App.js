import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/posts/:postId">
          <Post />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
