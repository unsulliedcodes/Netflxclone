import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Logins from "./pages/Logins/Logins";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Logins />} />
      </Routes>
    </div>
  );
};

export default App;
