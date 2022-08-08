import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Routes
import pages from "./../Pages";
import AdminRoutes from "./AdminRoutes";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<pages.Home />}>
        {/* admin view */}
        <Route path="" element={<AdminRoutes />}>
          <Route path="" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<pages.Dashboard />} />
          <Route path="edit-listing" element={<pages.EditListing />} />
          <Route path="purchases" element={<pages.Purchases />} />
          <Route
            path="scheduled-viewings"
            element={<pages.ScheduledViewings />}
          />
        </Route>
        {/* project info */}
        <Route path="/project-info" element={<pages.ProjectInfo />} />
      </Route>
    </Routes>
  );
};

export default ApplicationRoutes;
