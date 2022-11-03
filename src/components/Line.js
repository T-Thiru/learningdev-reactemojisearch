import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Line = ({ emoji, value, setValue, result, setResult }) => {
  return (
    <div className="wrapper">
      <ListGroup>
        {result.map((e, key) => {
          return (
            <ListGroup.Item key={key}>
              {e.title} {e.symbol}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Line;
