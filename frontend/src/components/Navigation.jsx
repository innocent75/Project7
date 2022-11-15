import React from "react";
import { NavLink, renderMatches } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Navigation = () => {
  const [post, setPosts] = useState([]);

  //Logout
  let navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/signin");
  }

  return (
    <div className="navigation">
      <nav>
        <Header />
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>

          <NavLink to="/create">
            <li>Create</li>
          </NavLink>

          <NavLink to="/signin">
            <li>Signin</li>
          </NavLink>

          <NavLink to="/signup">
            <li>Signup</li>
          </NavLink>

          <button className="btnlogout" type="button" onClick={logout}>
            logout
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
