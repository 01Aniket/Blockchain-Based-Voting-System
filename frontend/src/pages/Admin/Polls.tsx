import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Chart from "../../components/Polls/Chart";
import Panel from "../../components/Polls/Panel";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";

const Polls = ({
  status,
  setStatus,
}: {
  status: "running" | "finished";
  setStatus: (status: "running" | "finished" | "not-started") => void;
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", description: "", votes: {} });

  useEffect(() => {
    axios.get("/polls/").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  const endElection = () => {
    axios
      .post("/polls/end")
      .then((_) => {
        setStatus("finished");
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  const resetElection = () => {
    axios
      .post("/polls/reset")
      .then((_) => {
        setStatus("not-started");
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  if (loading)
    return (
      <div className="loading-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Spinner spinning={true} />
        </div>
      </div>
    );

  return (
    <Panel name={data.name} description={data.description}>
      <>
        <Chart votes={data.votes} voteState={status} />

        {status === "running" ? (
          <Button handleClick={endElection} buttonText="End Election" />
        ) : (
          <Button handleClick={resetElection} buttonText="Reset Election" />
        )}
      </>
    </Panel>
  );
};

export default Polls;
