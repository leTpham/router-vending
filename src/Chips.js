import React from "react";
import { Link } from "react-router-dom"

/** Show chip
 * should be able to go back to the main VendingMachine component
*/
function Chips() {
  return (
    <div>
      <h1>NOM NOM NOM</h1>
      <img
        src="https://media.giphy.com/media/l2QDPfzp4dIVpbL2M/giphy.gif"

        alt="Awkwafina eating chips."
      />
      <p>So tasty!</p>
      <li><Link to="/">Go Back</Link></li>

    </div>
  );
}

export default Chips;