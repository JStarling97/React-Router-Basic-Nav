import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
      <div>
        <div className="App">
          <h1>React Router Mini</h1>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navigation;
