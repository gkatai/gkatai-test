import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, getCommentsForPost } from "./api";

const Post = () => {
  let { postId } = useParams();
  let [postResult, setPostResult] = useState({
    status: "loading",
  });
  let [commentResult, setCommentResult] = useState({
    status: "loading",
  });

  useEffect(() => {
    getPost(postId)
      .then((response) => response.json())
      .then((data) => setPostResult({ status: "loaded", data }))
      .catch((error) => setPostResult({ status: "errored", error }));

    getCommentsForPost(postId)
      .then((response) => response.json())
      .then((data) => setCommentResult({ status: "loaded", data }))
      .catch((error) => setCommentResult({ status: "errored", error }));
  }, [postId]);

  return (
    <>
      {renderPost(postResult)}
      {renderCommentsResult(commentResult)}
    </>
  );
};

function renderPost(postResult) {
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
}

function renderCommentsResult(commentResult) {
  switch (commentResult.status) {
    case "loading":
      return <p>Loading...</p>;
    case "loaded":
      return renderComments(commentResult.data);
    default:
      return <p>Something went wrong...</p>;
  }
}

function renderComments(comments) {
  return comments.map((comment) => (
    <>
      <hr />
      <p>Name: {comment.name}</p>
      <p>Email: {comment.email}</p>
      <p>Body: {comment.body}</p>
    </>
  ));
}

export default Post;
