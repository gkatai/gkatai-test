import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./api";
import Loader from "./Loader";

const Posts = () => {
  const [postResult, setPostResult] = useState({ status: "loading" });

  const memoizedRenderPosts = useCallback(() => renderPosts(postResult.data), [
    postResult.data,
  ]);

  return (
    <>
      <h1>Posts</h1>

      <Loader
        result={postResult}
        setResults={setPostResult}
        fetchMethod={getPosts}
        renderMethod={memoizedRenderPosts}
      />
    </>
  );
};

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
