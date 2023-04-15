import React from "react";
import { useParams } from "react-router";
import axios from "../../axios";

const Verify = () => {
  const { id, name } = useParams();

  const verifyUser = () => {
    axios
      .post("/users/verify", { userId: id })
      .then(() => {})
      .catch((error) => {
        throw new Error(error);
      });
  };

  const deleteUser = () => {
    axios
      .delete(`/users/delete/${id}`)
      .then(() => {})
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <div>
      <button onClick={verifyUser} className="button-primary">
        verify {name}
      </button>

      <button onClick={deleteUser} className="button-black">
        delete {name}
      </button>
    </div>
  );
};

export default Verify;
