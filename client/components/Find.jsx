import React, { useState } from "react";
// import { Form } from "react-bootstrap";

// import { getRecipes } from "../api";

function Find() {
  const [search, searchData] = useState({
    name: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    console.log(evt.target.value);
    searchData({
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" onChange={handleChange} />
        <button onChange={handleChange} value={search.name}>
          Fill ma belly
        </button>
      </form>

      {/* <Form.Group controlId="foodSelection">
        <Form.Control
          type="text"
          placeholder="Normal text"
          onSubmit={handleSubmit}
        />
        <Form.Label className="form-wording">Find the food</Form.Label> */}

      {/* </Form.Group> */}
      <div>
        {/* <h2>{search.name}</h2> */}
        {/* {recipe} */}
        <br />
      </div>
    </>
  );
}

export default Find;
