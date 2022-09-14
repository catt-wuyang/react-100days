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
        <Link to="/007" className="days-link">
          <span>007</span>
          <b>Theme</b>
        </Link>
        <Link to="/011" className="days-link">
          <span>011</span>
          <b>Cart</b>
        </Link>
        <Link to="/012" className="days-link">
          <span>012</span>
          <b>Twitter</b>
        </Link>
      </div>
    </div>
  );
};

export default App;
