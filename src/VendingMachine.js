import React from "react";
import Nav from "./Nav"

/**
 * shows a page with a list of snacks that you can get from the vending machine
 * with nav
 */
function VendingMachine() {
  return (
    <div>
      <h1>I'M HUNGRY</h1>
      <Nav />
      <img
        src="https://media.giphy.com/media/CprnDw0e7u1IHOioYp/giphy.gif"
        alt="Dwight being Dwight."
      />
    </div>
  );
}

export default VendingMachine;
