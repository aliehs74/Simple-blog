import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/BlogPage">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/ContactPage">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/AboutPage">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

