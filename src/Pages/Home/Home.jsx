import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Nav from "../../Components/Blocks/Nav/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Home;
