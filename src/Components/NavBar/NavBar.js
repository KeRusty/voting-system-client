import React from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "antd";

// Styles
import "./NavBar.scss";

function NavBar({ back }) {
  const navigate = useNavigate();
  return (
    <PageHeader
      className="site-page-header"
      onBack={back ? () => navigate("/") : false}
      title="Voting System"
    />
  );
}

export default NavBar;
