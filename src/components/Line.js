import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Line = (props) => {
  return (
    <div className="wrapper">
      <ListGroup>
        {props.emoji.map((e, key) => {
          return (
            <ListGroup.Item key={key}>
              {e.title} {e.symbol}
            </ListGroup.Item>
          );
        })}
        ;
      </ListGroup>
    </div>
  );
};

export default Line;
