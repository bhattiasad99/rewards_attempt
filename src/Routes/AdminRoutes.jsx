import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../Components/Blocks/Drawer/Drawer";

const AdminRoutes = () => {
  return (
    <div>
      <Drawer />
      <Outlet />
      {/* drawer */}
      {/* routes */}
    </div>
  );
};

export default AdminRoutes;
