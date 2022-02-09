import React, { useState, useEffect } from "react";

import { getWelcome } from "../api";
import Forms from "./Forms";
import Find from "./Find";
// import Cat from "./Cat";
import Recipes from "./Recipes";
// import SearchBar from "./SearchBar";
// import RecipeData from "./Data.json";

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState("");

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement);
        return null;
      })
      .catch((err) => {
        console.error(err.message);
      });
  });

  return (
    <div>
      <h1>Kia Ora!</h1>
      <h2>Welcome to maKai guide 🍕🍜🍲🍣🥗</h2>
      <h3>{welcomeStatement}</h3>
      <Forms />
      <Find />
      <Recipes />
      {/* <SearchBar placeholder="What to eat?.." data={RecipeData} /> */}

      <p></p>

      <div className="cat">
        <div className="ear"></div>
        <div className="eye"></div>
        <div className="mouth"></div>
        <div className="nose"></div>
        <div className="tail"></div>
        <div className="body"></div>
        {/* <div className="patch"></div> */}
        <div className="bubble"></div>
      </div>
    </div>
  );
}

export default App;
