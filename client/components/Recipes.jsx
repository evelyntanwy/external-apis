import React, { useState } from "react";

import { getRecipes } from "../api";

function Recipes() {
  const [recipe, setRecipe] = useState("");

  const handleClick = () => {
    getRecipes()
      .then((recipe) => {
        setRecipe(recipe.hits[0].recipe.url);
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
