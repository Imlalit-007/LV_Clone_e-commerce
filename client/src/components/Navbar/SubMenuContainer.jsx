
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import MenuItem from "./MenuItem.jsx";
import ImgContainer from "./ImgContainer.jsx";
import { useMenu } from "../../context/MenuContext/MenuContext.jsx";

const SubMenuContainer = () => {
  const {
    toggleNav,
    setToggleNav,
    showSubMenu,
    setShowSubMenu,
    showSubChildMenu,
    setShowSubChildMenu,
    currentSubMenu,
    setCurrentSubMenu,
    currentSubChildMenu,
    setCurrentSubChildMenu,
    handleSubChildMenuItemClick,
    handleBackButtonClick,
    handleBackSubChildButtonClick,
  } = useMenu();

  return (
    <>
     
      <div
        className={`sub_menu_container ${
          showSubMenu ? "sub_menu_container_expanded" : ""
        }`}
      >
        {currentSubMenu && currentSubMenu.children ? (
          <>
            <div
              onClick={handleBackButtonClick}
              className='back_icon_text'
            >
              <BsArrowLeft />
              <span>{currentSubMenu.label}</span>
            </div>
            {currentSubMenu && currentSubMenu.imageAndText ? (
              <ImgContainer />
            ) : null}
            <ul className='sub_menu_list'>
              {currentSubMenu.children.map((child) => (
                <MenuItem
                  key={child.label}
                  item={child}
                  handleClick={() => handleSubChildMenuItemClick(child)}
                />
              ))}
            </ul>
          </>
        ) : null}
      </div>
     
      <div
        className={`sub_menu_container ${
          currentSubChildMenu ? "sub_menu_container_expanded" : ""
        }`}
      >
        {currentSubChildMenu &&
        (currentSubChildMenu.children || currentSubChildMenu.imageAndText) ? (
          <>
            <div
              onClick={handleBackSubChildButtonClick}
              className='back_icon_text'
            >
              <BsArrowLeft />
              <span>{currentSubChildMenu.label}</span>
            </div>
            {currentSubChildMenu && currentSubChildMenu.imageAndText ? (
              <ImgContainer />
            ) : null}
            <ul
              style={{
                height:
                  currentSubChildMenu && currentSubChildMenu.children
                    ? "max-content"
                    : "auto",
              }}
              className='sub_menu_list'
            >
              {currentSubChildMenu.children
                ? currentSubChildMenu.children.map((child) => (
                    <MenuItem
                      key={child.label}
                      item={child}
                      handleClick={() => handleSubChildMenuItemClick(child)}
                    />
                  ))
                : null}
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};

export default SubMenuContainer;

