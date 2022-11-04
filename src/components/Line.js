import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Line = ({ emoji, value, setValue, result, setResult }) => {
  return (
    <div className="wrapper">
      <ListGroup>
        {result.map((e, key) => {
          return (
            <div className="liste" key={key}>
              <ListGroup.Item key={key}>
                {e.title} {e.symbol}
              </ListGroup.Item>
            </div>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Line;
