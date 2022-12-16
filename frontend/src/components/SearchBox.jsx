import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputGroup className=" pt-2 pt-sm-2 pt-md-1 pt-lg-0">
        <Button
          type="submit"
          variant="outline-success"
          className="p-2 rounded-left "
          size="sm"
          style={{ width: "3rem" }}
        >
          <FaSearch />
        </Button>
        <Form.Control
          type="search"
          size="sm"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="rounded-right"
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
