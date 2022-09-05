import React from "react";
import { Link } from "react-router-dom"

function Candies() {
  return (
    <div>
      <h1>NOM NOM NOM</h1>
      <img
        src="https://media.giphy.com/media/B2oPDSxRxnH1u/giphy.gif"
        alt="Cartoon man eating lots of donuts."
      />
      <p>So tasty!</p>
      <li><Link to="/">Go Back</Link></li>
    </div>
  );
}

export default Candies;