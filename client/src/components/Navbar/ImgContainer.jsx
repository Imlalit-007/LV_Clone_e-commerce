import React, { useEffect, useState } from "react";
import { useMenu } from "../../context/MenuContext/MenuContext.jsx";
import Loader from "../Loader/Loader.jsx";
import { Link } from "react-router-dom";

const ImgContainer = ({ items }) => {
  const {
    currentSubMenu,
    currentSubChildMenu,
    handleMenuItemClick,
    handleSubChildMenuItemClick,
  } = useMenu();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry, self) => {
        if (entry.isIntersecting) {
          setIsLoading(true);
          loadImages(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const imgs = document.querySelectorAll("img[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });

    function loadImages(image) {
      image.src = image.dataset.src;
      image.onload = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
        if (loadedImagesCount === imgs.length - 1) {
          setIsLoading(false);
        }
      };
    }

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, [currentSubMenu, currentSubChildMenu]);

  const imageAndTextArray = currentSubChildMenu
    ? currentSubChildMenu.imageAndText
    : currentSubMenu
    ? currentSubMenu.imageAndText
    : [];

  return imageAndTextArray ? (
    <div
      className={`img_text_container ${
        imageAndTextArray.length % 2 !== 0 &&
        imageAndTextArray.length !== 3 &&
        imageAndTextArray.length !== 5
          ? "span_col_img_text_container"
          : ""
      }`}
    >
      {imageAndTextArray.map((imgText) => (
        <Link
          className='img_container'
          key={imgText.text}
          onClick={currentSubMenu ? handleMenuItemClick : handleSubChildMenuItemClick}
        >
          {isLoading && <Loader />}
          <img
            src=''
            data-src={imgText.img}
            onLoad={() => setIsLoading(false)}
          />
          <span>{imgText.text}</span>
        </Link>
      ))}
    </div>
  ) : null;
};

export default ImgContainer;
