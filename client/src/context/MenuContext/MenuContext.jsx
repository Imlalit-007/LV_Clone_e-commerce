import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentSubMenu, setCurrentSubMenu] = useState(null);
  const [showSubChildMenu, setShowSubChildMenu] = useState(false);
  const [currentSubChildMenu, setCurrentSubChildMenu] = useState(null);
  const [toggleNav, setToggleNav] = useState(false);

  const handleNavOnClick = () => {
    setToggleNav((prevToggleNav) => !prevToggleNav);
    if (showSubMenu || showSubChildMenu) {
      setShowSubMenu(false);
      setShowSubChildMenu(false);
      setCurrentSubMenu(null);
      setCurrentSubChildMenu(null);
    }

    const sidebarContent = document.querySelector(".sidebar");
    if (sidebarContent && !toggleNav) {
      sidebarContent.scrollTop = 0;
    }
  };

  const handleMenuItemClick = (item) => {
    if (item.children && toggleNav) {
      setShowSubMenu(true);
      setCurrentSubMenu(item);
      setCurrentSubChildMenu(null);
      const sidebarContent = document.querySelector(".sidebar");
      if (sidebarContent && toggleNav) {
        sidebarContent.scrollTop = 0;
      }
    } else {
      setShowSubMenu(false);
      setCurrentSubMenu(null);
      setToggleNav(false);
      setCurrentSubChildMenu(null);
    }
  };

  const handleBackButtonClick = () => {
    setShowSubMenu(false);
    setCurrentSubMenu(null);
    setCurrentSubChildMenu(null);
  };

  const handleSubChildMenuItemClick = (item) => {
    if ((item.children && toggleNav) || (item.imageAndText && toggleNav)) {
      setShowSubChildMenu(true);
      setCurrentSubChildMenu(item);
    } else {
      setShowSubMenu(false);
      setCurrentSubMenu(null);
      setCurrentSubChildMenu(null);
      setToggleNav(false);
    }
  };

  const handleBackSubChildButtonClick = () => {
    setCurrentSubChildMenu(null);
    setShowSubChildMenu(false);
  };

  return (
    <MenuContext.Provider
      value={{
        toggleNav,
        setToggleNav,
        showSubMenu,
        setShowSubMenu,
        currentSubMenu,
        setCurrentSubMenu,
        showSubChildMenu,
        setShowSubChildMenu,
        currentSubChildMenu,
        setCurrentSubChildMenu,
        handleNavOnClick,
        handleMenuItemClick,
        handleSubChildMenuItemClick,
        handleBackButtonClick,
        handleBackSubChildButtonClick,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
