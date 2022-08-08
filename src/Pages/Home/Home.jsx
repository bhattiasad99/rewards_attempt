import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      nav
      <Outlet />
    </div>
  );
};

export default Home;
