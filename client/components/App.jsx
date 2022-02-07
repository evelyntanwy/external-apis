import React, { useState, useEffect } from "react";

import { getWelcome } from "../api";
import Forms from "./Forms";

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
      <h2>{welcomeStatement}</h2>
      <Forms />
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
