import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, getCommentsForPost } from "./api";
import Loader from "./Loader";

const Post = () => {
  const { postId } = useParams();
  const [postResult, setPostResult] = useState({ status: "loading" });
  const [commentResult, setCommentResult] = useState({ status: "loading" });
  const memoizedGetPost = useCallback(() => getPost(postId), [postId]);
  const memoizedRenderPost = useCallback(() => renderPost(postResult.data), [
    postResult.data,
  ]);
  const memoizedGetComments = useCallback(() => getCommentsForPost(postId), [
    postId,
  ]);
  const memoizedRenderComments = useCallback(
    () => renderComments(commentResult.data),
    [commentResult.data]
  );

  return (
    <>
      <Loader
        result={postResult}
        setResults={setPostResult}
        fetchMethod={memoizedGetPost}
        renderMethod={memoizedRenderPost}
      />
      <Loader
        result={commentResult}
        setResults={setCommentResult}
        fetchMethod={memoizedGetComments}
        renderMethod={memoizedRenderComments}
      />
    </>
  );
};

function renderPost(post) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
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
