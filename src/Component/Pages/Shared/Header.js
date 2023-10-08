import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/" className="font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/product" className="font-bold">
          Products
        </Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard" className="font-bold">
            Dashboard
          </Link>
        </li>
      )}

      <li>
        <Link to="/portfolio" className="font-bold">
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/blog" className="font-bold">
          Blog
        </Link>
      </li>

      <li>
        {user ? (
          <button onClick={logOut} className="btn btn-ghost font-bold">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="font-bold">
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-amber-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
          HOMIE's
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
