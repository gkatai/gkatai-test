import React, { useEffect, useState } from "react";
import { getPost } from "./api";
import { useParams } from "react-router-dom";

const Post = () => {
  let { postId } = useParams();
  let [postResult, setPostResult] = useState({
    status: "loading",
  });

  useEffect(() => {
    getPost(postId)
      .then((response) => response.json())
      .then((data) => setPostResult({ status: "loaded", data }))
      .catch((error) => setPostResult({ status: "errored", error }));
  }, [postId]);

  switch (postResult.status) {
    case "loading":
      return <p>Loading...</p>;
    case "loaded":
      return (
        <>
          <h1>{postResult.data.title}</h1>
          <p>{postResult.data.body}</p>
        </>
      );
    default:
      return <p>Something went wrong...</p>;
  }
};

export default Post;
