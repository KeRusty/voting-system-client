import React from "react";

// Components
import NavBar from "../../Components/NavBar/NavBar";
import Table from "../../Components/Table/Table";
import Button from "../../Components/Button/Button";

// Styles
import "./Landing.scss";

function Landing() {
  return (
    <div>
      <NavBar />

      <div className="button-container">
        <Button title={"Add a Vote"} link={"/addVote"} />
      </div>

      <div className="table-container">
        <Table />
      </div>
    </div>
  );
}

export default Landing;
