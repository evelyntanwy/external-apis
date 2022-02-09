import React, { useState } from "react";
import { Form } from "react-bootstrap";

import { getRecipes } from "../api";

function Recipes() {
  const [recipe, setRecipe] = useState("");
  const [search, setSearch] = useState("");

  // recipe.hits[0].recipe.label - Food title
  // recipe.hits[0].recipe.url - Link to page
  // recipe.hits[0].recipe.image - image

  const handleClick = () => {
    getRecipes(search)
      .then((recipe) => {
        setRecipe(recipe.hits[0].recipe.image);
        return null;
      })
      .catch((err) => {
        console.log(err.message);
      });
    setSearch("");
  };

  const handleChange = (evt) => {
    console.log(evt.target.value);
    // const selected = evt.target.value;
    setSearch(evt.target.value);
    //alert(`${evt.target.value}`);
    evt.preventDefault();
  };

  return (
    <>
      <Form.Group controlId="foodSelection">
        <Form.Control type="text" placeholder="Normal text" />
        <Form.Label className="form-wording">Find the food</Form.Label>
        {/* <select
          className="form-select form-select-lg mb-3 mt-2"
          id="dropdown-button-dark-example2"
          aria-label=".form-select-lg example"
          onChange={handleChange}
        > */}
        {/* <option defaultChecked="chicken">Please select the food</option>
        <option value="Chicken">Chicken</option>
        <option value="Pizza">Pizza</option>
        <option value="Pasta">Pasta</option> */}
        {/* </select> */}
        <input type="text" value={search} onChange={handleChange} />
        {/* <button type="submit">Fill ma belly</button> */}
        <button onClick={handleClick}>Fill ma belly</button>
      </Form.Group>
      <div>
        {recipe}
        <br />
      </div>
    </>
  );
}

export default Recipes;
