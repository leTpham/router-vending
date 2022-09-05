import React from "react";
import { Link } from "react-router-dom"

/** Show soda
 * should be able to go back to the main VendingMachine component
 */
function Soda() {
  return (
    <div>
      <h1>SO REFRESHING</h1>
      <img
        src="https://i.giphy.com/DbD6EnlEQmjTi.gif"
        alt="Diet coke exploding everywhere."
      />
      <li><Link to="/">Go Back</Link></li>

    </div>
  );
}

export default Soda;
