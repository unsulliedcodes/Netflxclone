import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Logins from "./pages/Logins/Logins";
import Player from "./pages/Player/Player";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/player/:id" element={<Player/>} />
      </Routes>
    </div>
  );
};

export default App;
