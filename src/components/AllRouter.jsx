import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import SiteList from "../pages/SiteList";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetpass" element={<ResetPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/addsite" element={<SiteList />} />
    </Routes>
  );
};

export default AllRouter;
