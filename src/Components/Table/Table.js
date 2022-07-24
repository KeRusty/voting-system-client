import React, { useState, useEffect } from "react";
import axios from "axios";
import { Space, Table, Tag, message } from "antd";

// Components
import Spinner from "../Spinner/Spinner";

// Styles
import "./Table.scss";

function VoteTable() {
  const [loading, setLoading] = useState(false);
  const [voteData, setVoteData] = useState();
  const [deleted, setDeleted] = useState(false);
  const [voteFor, setVoteFor] = useState(false);
  const [voteAgainst, setVoteAgainst] = useState(false);

  const error = () => {
    message.error("Vote Count is already Zero (0)");
  };

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
      render: (text, record) => {
        let color;
        if (record.voteCount < 3) {
          color = "volcano";
        } else if ((record.voteCount >= 3) & (record.voteCount <= 6)) {
          color = "blue";
        } else if (record.voteCount > 6) {
          color = "green";
        }

        return <Tag color={color}>{record.voteCount}</Tag>;
      },
    },
    {
      key: "voteName",
      dataIndex: "voteName",
      title: "Action",
      render: (text, record) => (
        <Space size="middle">
          <p
            className="voteForButton"
            onClick={() => {
              onVoteFor(record._id);
            }}
          >
            Vote For
          </p>
          <p
            className="voteAgainstButton"
            onClick={() => {
              onVoteAgainst(record._id, record.voteCount);
            }}
          >
            Vote Against
          </p>
          <p
            className="deleteButton"
            onClick={() => {
              deleteVote(record._id);
            }}
          >
            Delete Vote
          </p>
        </Space>
      ),
    },
  ];

  const onVoteFor = async (id) => {
    setLoading(true);
    await axios
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

  const onVoteAgainst = async (id, voteCount) => {
    if (voteCount === 0) {
      error();
    } else {
      setLoading(true);
      await axios
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
    }
  };

  // DOUBLE CHECK
  const deleteVote = async (id) => {
    setLoading(true);
    await axios
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

  const getAllVotes = async () => {
    setLoading(true);
    await axios
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
    <div>
      {loading && <Spinner />}
      {!loading && <Table columns={columns} dataSource={voteData} />}
    </div>
  );
}

export default VoteTable;
