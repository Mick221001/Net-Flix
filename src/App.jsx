import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet /> {/* Questo cambierà in base alla pagina visitata */}
    </div>
  );
}

export default App;
