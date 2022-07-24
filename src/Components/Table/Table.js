import React, { useState, useEffect } from "react";
import axios from "axios";
import { Space, Table, Tag } from "antd";

// Styles
import "./Table.scss";

function VoteTable() {
  const [loading, setLoading] = useState(false);
  const [voteData, setVoteData] = useState();
  const [deleted, setDeleted] = useState(false);
  const [voteFor, setVoteFor] = useState(false);
  const [voteAgainst, setVoteAgainst] = useState(false);

  const columns = [
    {
      key: "voteName",
      title: "Vote Name",
      dataIndex: "voteName",
    },
    {
      key: "voteDescription",
      title: "Vote Description",
      dataIndex: "voteDescription",
    },
    {
      key: "voteCount",
      title: "Vote Count",
      dataIndex: "voteCount",
      render: (text, record) => <Tag color="magenta">{record.voteCount}</Tag>,
    },
    {
      key: "voteName",
      dataIndex: "voteName",
      title: "Action",
      render: (text, record) => (
        <Space size="middle">
          <a
            className="voteForButton"
            onClick={() => {
              onVoteFor(record._id);
            }}
          >
            Vote For
          </a>
          <a
            className="voteAgainstButton"
            onClick={() => {
              onVoteAgainst(record._id);
            }}
          >
            Vote Against
          </a>
          <a
            className="deleteButton"
            onClick={() => {
              deleteVote(record._id);
            }}
          >
            Delete Vote
          </a>
        </Space>
      ),
    },
  ];

  const onVoteFor = (id) => {
    console.log(id, "FOR FIRED");
    setLoading(true);
    axios
      .patch(`http://localhost:3000/api/incrementVote/${id}`)
      .then(function (response) {
        if (!voteFor) {
          setVoteFor(true);
        } else {
          setVoteFor(false);
        }
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onVoteAgainst = (id) => {
    console.log(id, "AGAINST FIRED");
    setLoading(true);
    axios
      .patch(`http://localhost:3000/api/decrementVote/${id}`)
      .then(function (response) {
        if (!voteAgainst) {
          setVoteAgainst(true);
        } else {
          setVoteAgainst(false);
        }
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // DOUBLE CHECK
  const deleteVote = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/api/deleteVote/${id}`)
      .then(function (response) {
        if (!deleted) {
          setDeleted(true);
        } else {
          setDeleted(false);
        }
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getAllVotes = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/getAllVotes")
      .then(function (response) {
        setVoteData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllVotes();
  }, [deleted, voteFor, voteAgainst]);

  return (
    <div>{!loading && <Table columns={columns} dataSource={voteData} />}</div>
  );
}

export default VoteTable;
