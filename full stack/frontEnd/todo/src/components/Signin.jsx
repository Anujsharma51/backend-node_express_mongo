import React, { useState } from "react";

const Signin = () => {
  const [form, setFrom] = useState({});

  const handleChange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let x = await fetch(`http://localhost:8080/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    try {
      let res = await x;
      let data = await res.json();
      console.log("data:", data);
    } catch {
      console.log("response not vaild");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={handleChange}
          name="username"
        />

        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Signin;
