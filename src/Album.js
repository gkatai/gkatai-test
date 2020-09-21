import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhotosForAlbum } from "./api";
import Photo from "./Photo";

const Album = () => {
  const { albumId } = useParams();
  const [albumResult, setAlbumResult] = useState({ status: "loading" });

  useEffect(() => {
    getPhotosForAlbum(albumId)
      .then((response) => response.json())
      .then((data) => setAlbumResult({ status: "loaded", data }))
      .catch((error) => setAlbumResult({ status: "errored", error }));
  }, [albumId]);

  return (
    <>
      <h1>Album title</h1>
      {renderAlbumResult(albumResult)}
    </>
  );
};

function renderAlbumResult(albumResult) {
  switch (albumResult.status) {
    case "loading":
      return <p>Loading...</p>;
    case "loaded":
      return albumResult.data.map((photo) => (
        <Photo
          title={photo.title}
          thumbnailUrl={photo.thumbnailUrl}
          url={photo.url}
        />
      ));
    case "errored":
      return <p>Error: {albumResult.error.message}</p>;
    default:
      return <p>Something went wrong</p>;
  }
}

export default Album;
