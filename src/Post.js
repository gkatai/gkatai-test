import React from "react";

const Post = ({ title, body }) => {
  return (
    <>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </>
  );
};

export default Post;
