import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import "./index.css";
import SubmitArticle from "./pages/SubmitArticle";


const App = () => {
  return (
    <Router >
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/SEPractice" >Select the Practice</NavLink>
          </li>
          <li>
            <NavLink to="/SubmitArticle" >Submit an Article</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<SubmitArticle />} />


            <Route path="/*" element={<Navigate to="404" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;