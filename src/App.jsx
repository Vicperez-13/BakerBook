import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex flex-col gap-4 p-8">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-accent">Accent Button</button>
        <button className="btn btn-error">Error Button</button>
        <button className="btn btn-success">Success Button</button>
      </div>
    </div>
  );
}

export default App;
