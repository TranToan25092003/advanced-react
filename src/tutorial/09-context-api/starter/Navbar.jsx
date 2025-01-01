import React, { createContext, useContext } from "react";
import NavLinks from "./NavLinks";
import { useState } from "react";

export const NavbarContext = createContext();

//   custom hook
export const useAppContext = () => {
  return useContext(NavbarContext);
};

const Navbar = () => {
  const [user, setUser] = useState({ name: "something" });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider
      value={{
        user,
        logout,
      }}
    >
      <div className="navbar">
        <h5>Context api</h5>
        <NavLinks></NavLinks>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
