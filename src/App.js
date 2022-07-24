import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.min.css";

// Routes
import Landing from "./Views/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
