import { useState } from "react";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Body />
    </div>
  );
}

export default App;
