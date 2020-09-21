import React from "react";

const Photo = ({ title, thumbnailUrl, url }) => {
  return (
    <>
      <img src={thumbnailUrl} alt={title} />
    </>
  );
};

export default Photo;
