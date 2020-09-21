import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhotosForAlbum } from "./api";
import Loader from "./Loader";
import Photo from "./Photo";

const Album = () => {
  const { albumId } = useParams();
  const [albumResult, setAlbumResult] = useState({ status: "loading" });
  const memoizedGetPhotos = useCallback(() => getPhotosForAlbum(albumId), [
    albumId,
  ]);
  const memoizedRenderAlbum = useCallback(() => renderAlbum(albumResult.data), [
    albumResult.data,
  ]);

  return (
    <>
      <h1>Album title</h1>
      <Loader
        result={albumResult}
        setResults={setAlbumResult}
        fetchMethod={memoizedGetPhotos}
        renderMethod={memoizedRenderAlbum}
      />
    </>
  );
};

function renderAlbum(album) {
  return album.map((photo) => (
    <Photo
      title={photo.title}
      thumbnailUrl={photo.thumbnailUrl}
      url={photo.url}
    />
  ));
}

export default Album;
