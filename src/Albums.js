import React, { useCallback, useState } from "react";
import { getAlbums } from "./api";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Albums = () => {
  const [albumResult, setAlbumResult] = useState({ status: "loading" });
  const memoizedRenderAlbums = useCallback(
    () => renderAlbums(albumResult.data),
    [albumResult.data]
  );

  return (
    <>
      <h1>Albums</h1>
      <Loader
        result={albumResult}
        setResults={setAlbumResult}
        fetchMethod={getAlbums}
        renderMethod={memoizedRenderAlbums}
      />
    </>
  );
};

function renderAlbums(albums) {
  return albums.map((album) => (
    <div key={album.id}>
      <Link to={`/albums/${album.id}`}>{album.title}</Link>
    </div>
  ));
}

export default Albums;
