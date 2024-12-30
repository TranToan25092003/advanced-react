import React, { useState } from "react";
import { data } from "../data";
import { v4 as uuidv4 } from "uuid";
export function ControlledInputs({}) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setUser((old) => {
      return { ...old, [nameInput]: valueInput };
    });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check empty value
    console.log(user);
    setUser({ name: "", email: "", password: "" });
    // do st
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h4>Add user</h4>

        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        {/* password */}

        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        {/* submit btn */}
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </>
  );
}
