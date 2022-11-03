import React from "react";
import Form from "react-bootstrap/Form";

const Search = (props) => {
  return (
    <div className="search">
      <div>
        <p>Emoji Search</p>
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="emoji">
            <Form.Label>Search Emoji</Form.Label>
            <Form.Control type="email" placeholder="Search Emoji" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Search;
