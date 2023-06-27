import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./components/pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <Router>
      <Topbar />
      <div class="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
