import React, { useState } from "react";

import { getNasa } from "../api";

function Nasa() {
  const [nasa, setNasa] = useState(null);

  const handleClick = () => {
    console.log(nasa);
    getNasa()
      .then((nasa) => {
        setNasa(nasa.url);
        return null;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div>
        {nasa && <img src={nasa} alt="NASA pic of the day" />}
        <br />
        <button onClick={handleClick}>Rocket Yo!</button>
      </div>
    </>
  );
}

export default Nasa;
