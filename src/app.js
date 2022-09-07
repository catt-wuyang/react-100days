import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

const App = function () {
  return (
    <div className="days-page">
      <h2 className="days-title">100 days</h2>
      <div className="days-display">
        <Link to="/001" className="days-link">
          <span>001</span>
          <b>Todo-List</b>
        </Link>
        <Link to="/002" className="days-link">
          <span>002</span>
          <b>CountDown</b>
        </Link>
        <Link to="/004" className="days-link">
          <span>004</span>
          <b>optimization</b>
        </Link>
        <Link to="/006" className="days-link">
          <span>006</span>
          <b>Theme</b>
        </Link>
      </div>
    </div>
  );
};

export default App;
