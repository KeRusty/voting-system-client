import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Components
import NavBar from "../../Components/NavBar/NavBar";
import VoteForm from "../../Components/VoteForm/VoteForm";

// Styles
import "./AddVote.scss";

function AddVote() {
  const navigate = useNavigate();

  const handleOnSubmit = async (values) => {
    await axios
      .post(`http://localhost:3000/api/addVote`, values)
      .then(function (response) {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar back={true} />

      <div className="form-container">
        <VoteForm onSubmit={handleOnSubmit} />
      </div>
    </div>
  );
}

export default AddVote;
