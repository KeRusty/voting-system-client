import React from "react";
import { PageHeader } from "antd";

// Styles
import "./NavBar.scss";

const goBack = () => {};

const NavBar = () => (
  <PageHeader
    className="site-page-header"
    onBack={() => window.history.back()}
    title="Voting System"
  />
);

export default NavBar;
