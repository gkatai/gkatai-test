import React, { useEffect } from "react";

const Loader = ({ result, setResults, fetchMethod, renderMethod }) => {
  useEffect(() => {
    fetchMethod()
      .then((response) => response.json())
      .then((data) => setResults({ status: "loaded", data }))
      .catch((error) => setResults({ status: "errored", error }));
  }, [fetchMethod, setResults]);

  switch (result.status) {
    case "loading":
      return <p>Loading...</p>;
    case "loaded":
      return <>{renderMethod()}</>;
    case "errored":
      return <p>Error: {result.error.message}</p>;
    default:
      return <p>Something went wrong</p>;
  }
};

export default Loader;
