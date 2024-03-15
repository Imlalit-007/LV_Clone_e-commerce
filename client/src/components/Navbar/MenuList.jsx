import MenuItem from "./MenuItem.jsx";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { otherNavLinks } from "./otherNavLinks.js";
import { useMenu } from "../../context/MenuContext/MenuContext.jsx";
import SubMenuContainer from "./SubMenuContainer.jsx";

const MenuList = ({ lists }) => {
  const {
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
    handleMenuItemClick,
  } = useMenu();

  useEffect(() => {
    if (toggleNav) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [toggleNav, currentSubMenu, currentSubChildMenu]);

  return (
    <div
      style={{
        overflowY: showSubMenu || showSubChildMenu ? "hidden" : "auto",
      }}
      className={`sidebar ${toggleNav ? "open_sidebar" : ""}`}
    >
      <div className='menu_container'>
        <ul className={`menu_list ${showSubMenu ? "menu_list_hidden" : ""}`}>
          {lists.map((list) => (
            <MenuItem
              key={list.label}
              item={list}
              handleClick={() => handleMenuItemClick(list)}
            />
          ))}
          <ul className='other_nav_links_container'>
            {otherNavLinks.map((otherNavLink) => (
              <li
                key={otherNavLink.label}
                className='other_nav_links_list'
              >
                <Link>{otherNavLink.label}</Link>
              </li>
            ))}
          </ul>
        </ul>
        <SubMenuContainer />
      </div>
    </div>
  );
};

export default MenuList;
