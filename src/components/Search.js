import React from "react";
import Form from "react-bootstrap/Form";

const Search = ({ emoji, value, setValue, result, setResult }) => {
  const handleChange = (event) => {
    setValue(event.target.value);

    if (value !== "") {
      const results = emoji.filter((emo) => {
        return emo.keywords.toLowerCase().startsWith(value.toLowerCase());
      });
      setResult(results);
    } else {
      setResult(emoji);
    }
  };

  let random1 = Math.floor(Math.random() * 1800);
  let random2 = Math.floor(Math.random() * 1800);

  return (
    <div className="search">
      <div>
        <p>
          {emoji[random1].symbol} Emoji Search {emoji[random2].symbol}
        </p>
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="emoji">
            <Form.Label>Search Emoji</Form.Label>
            <Form.Control
              type="search"
              placeholder="Search Emoji"
              value={value}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Search;
