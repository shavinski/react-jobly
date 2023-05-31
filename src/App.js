import "./App.css";
import RoutesList from "./RoutesList";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

/** Loads initial app
 * 
 * * Props: 
 * - none
 * 
 * App -> { Nav, RoutesList } 
 */

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
