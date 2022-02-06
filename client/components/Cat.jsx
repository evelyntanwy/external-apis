import React, { useEffect, useState } from "react";

import { getCat } from "../api";

function Cat() {
  const [cat, setCat] = useState(null);

  // to have the image display
  useEffect(() => {
    getCat()
      .then((cat) => {
        console.log(cat[0].url);
        setCat(cat[0].url);
        return null;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // to create a button when clicked

  const whenClick = () => {
    getCat()
      .then((cat) => {
        setCat(cat[0].url);
        return null;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      {cat ? <img src={cat} alt="You get a cat!" /> : "Something meowing"}
      <br />
      <button onClick={whenClick}>Meow</button>
    </div>
  );
}

export default Cat;
