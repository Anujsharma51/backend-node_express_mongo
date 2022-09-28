import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "../Todo";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Signup from "./Signup";
const AllRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/auth/login" element={<Signin />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
        <Route path="/task:id" element={<Todo />}></Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
