import React from "react";
import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();
  console.log(user);

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>name: {user?.name}</p>
          <button
            className="btn"
            onClick={() => {
              logout();
            }}
          >
            logout
          </button>
        </>
      ) : (
        <>
          <p>please login</p>
        </>
      )}
    </div>
  );
};

export default UserContainer;
