import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to={"/posts"}>Posts</Link> |<Link to={"/albums/"}>Albums</Link>
      <hr />
    </>
  );
};

export default Menu;
