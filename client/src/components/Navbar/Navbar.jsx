import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import MenuList from "./MenuList.jsx";
import { links } from "./links.js";
import React, { useState, useEffect, useCallback } from "react";
import { useMenu } from "../../context/MenuContext/MenuContext.jsx";

const Navbar = () => {
  const {
    toggleNav,
    setToggleNav,
    showSubMenu,
    setShowSubMenu,
    showSubChildMenu,
    setShowSubChildMenu,
    handleNavOnClick,
  } = useMenu();
  const [navbar, setNavbar] = useState(false);

  const changeNavBgColor = useCallback(() => {
    setNavbar(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBgColor);
    return () => {
      window.removeEventListener("scroll", changeNavBgColor);
    };
  }, [changeNavBgColor]);

  return (
    <nav className={navbar || toggleNav ? "nav_active" : ""}>
      <div className='left'>
        <div className="menu">
          <div
            className={`toggle ${toggleNav ? "toggle_active" : ""}`}
            onClick={handleNavOnClick}
          ></div>
          <span>Menu</span>
        </div>
        <div className='search'>
          <IoSearchOutline />
          <span>Search</span>
        </div>
      </div>

      <MenuList lists={links} />

      <div className='logo'>
        <Link to='/'>louis vuitton</Link>
      </div>
      <div className='cart'>
        <SlHandbag />
        <span>0</span>
      </div>
    </nav>
  );
};

export default Navbar;
