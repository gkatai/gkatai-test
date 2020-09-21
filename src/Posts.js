import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./api";

const Posts = () => {
  let [postResult, setPostResult] = useState({
    status: "loading",
  });

  useEffect(() => {
    getPosts()
      .then((response) => response.json())
      .then((data) => setPostResult({ status: "loaded", data }))
      .catch((error) => setPostResult({ status: "errored", error }));
  }, []);

  return (
    <>
      <h1>Posts</h1>

      {renderPostResult(postResult)}
    </>
  );
};

function renderPostResult(postResult) {
  switch (postResult.status) {
    case "loading":
      return <p>Loading...</p>;
    case "loaded":
      return renderPosts(postResult.data);
    case "errored":
      return <p>Error: {postResult.error.message}</p>;
    default:
      return <p>Something went wrong</p>;
  }
}

function renderPosts(posts) {
  return posts.map((post) => (
    <div key={post.id}>
      <Link to={{ pathname: `/posts/${post.id}`, state: post }}>
        {post.title}
      </Link>
    </div>
  ));
}

export default Posts;
