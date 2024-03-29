import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import "./Navbar.css";
import { getId } from "../../features/patient/patientSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { patientUsers } = useSelector((store) => store.patient);

  const logOut = () => {
    signOut(auth);
  };

  const [user] = useAuthState(auth);

  const check = patientUsers.find((patient) => patient.email === user?.email);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>

            {user ? (
              <li>
                <button
                  className="px-4 bg-slate-700 text-white"
                  onClick={() => logOut()}
                >
                  Logout ({user?.email})
                </button>
              </li>
            ) : (
              <li>
                <Link to="/register">Sign Up</Link>
                <Link to="/login">Login</Link>
              </li>
            )}
            {check && (
              <li>
                <Link to="/status">Status</Link>
              </li>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" to="/home">
          <img width="120px" src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/home">Home</Link>
          </li>

          {user ? (
            <li>
              <button
                className="px-4 bg-slate-700 text-white"
                onClick={() => logOut()}
              >
                Logout ({user?.email})
              </button>
            </li>
          ) : (
            <li>
              <Link to="/register" onClick={() => dispatch(getId())}>
                Sign Up
              </Link>
              <Link to="/login">Login</Link>
            </li>
          )}
          {check && (
            <li>
              <Link to="/status">Status</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="nav-btn" to="/dashboard">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
