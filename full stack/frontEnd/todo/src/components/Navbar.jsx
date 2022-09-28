import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/auth/login">sign in</Link>
      <Link to="/auth/signup">sign up</Link>
      <Link to="/task/id">sign in</Link>
    </div>
  );
};

export default Navbar;
