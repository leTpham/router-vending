import React from "react";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>

        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
