import React, { useState } from "react";

import { getRecipes } from "../api";

function Recipes() {
  const [recipe, setRecipe] = useState(null);

  const handleClick = () => {
    getRecipes();
    console
      .log("hello", recipe)
      .then((recipe) => {
        setRecipe(recipe.title);
        return null;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div>
        {recipe}
        <p>Testing</p>
        <br />
        <button onClick={handleClick}>Fill ma belly</button>
      </div>
    </>
  );
}

export default Recipes;
