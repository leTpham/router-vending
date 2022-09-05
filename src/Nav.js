import React from "react";
import { Link } from "react-router-dom";

/** Links to each snack component */
function Nav() {
  return (
    <ul>
      <li><Link to="/soda">Soda</Link></li>
      <li><Link to="/chips">Chips</Link></li>
      <li><Link to="/candies">Candies</Link></li>
    </ul>
  );
}
// end

export default Nav;
