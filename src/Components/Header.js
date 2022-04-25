import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";
import { SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/solid";
// import middlemenlOgo from "../../assets/middlemenlogo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center navtry mx-40">
      <Link to='/'>
        <div className="flex pt-1 logo-name">
         
          <span>Event</span>
        </div>
      </Link>


      <div className="inline-block">
        <Link
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0  mr-4  register"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
