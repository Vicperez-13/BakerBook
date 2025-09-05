import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-red-500 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        DaisyUI Test
      </h1>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-accent">Accent Button</button>
        <button className="btn btn-error">Error Button</button>
        <button className="btn btn-success">Success Button</button>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">DaisyUI Card</h2>
            <p>This is a test card to see if DaisyUI is working properly.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Action</button>
            </div>
          </div>
        </div>

        <div className="alert alert-info">
          <span>DaisyUI alert component is working!</span>
        </div>
      </div>
    </div>
  );
}

export default App;
