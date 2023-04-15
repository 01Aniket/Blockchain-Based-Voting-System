import React from "react";
import { Spin } from "antd";
// eslint-disable-next-line import/no-extraneous-dependencies
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = ({
  spinning,
  size = 40,
}) => {
  return (
    <div className="spinner">
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: size,
              marginRight: "0.4em",
              marginBottom: "0.4em",
              color: "#E54065",
            }}
            spin
          />
        }
        spinning={spinning}
      />
    </div>
  );
};

export default Spinner;
