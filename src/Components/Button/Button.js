import React from "react";
import { Button } from "antd";

// Styles
import "./Button.scss";

const AppButton = ({ title, link }) => (
  <Button className="button" type="primary" block href={link}>
    {title}
  </Button>
);

export default AppButton;
