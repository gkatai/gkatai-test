import React, { useEffect, useState } from "react";
import { getPosts } from "./api";
import Post from "./Post";

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
      return postResult.data.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ));
    case "errored":
      return <p>Error: {postResult.error.message}</p>;
    default:
      return <p>Something went wrong</p>;
  }
}

export default Posts;
