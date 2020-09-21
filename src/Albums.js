import React, { useEffect, useState } from "react";
import { getAlbums } from "./api";
import { Link } from "react-router-dom";

const Albums = () => {
  const [albumResult, setAlbumResult] = useState({ status: "loading" });

  useEffect(() => {
    getAlbums()
      .then((response) => response.json())
      .then((data) => setAlbumResult({ status: "loaded", data }))
      .catch((error) => setAlbumResult({ status: "errored", error }));
  }, []);

  switch (albumResult.status) {
    case "loading":
      return <p>Loading...</p>;
    case "loaded":
      return renderAlbums(albumResult.data);
    case "errored":
      return <p>Error: {albumResult.error.message}</p>;
    default:
      return <p>Something went wrong</p>;
  }
};

function renderAlbums(albums) {
  return albums.map((album) => (
    <div key={album.id}>
      <Link to={`/albums/${album.id}`}>{album.title}</Link>
    </div>
  ));
}

export default Albums;
