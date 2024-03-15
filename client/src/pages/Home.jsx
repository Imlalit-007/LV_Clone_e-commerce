import React, { useRef } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import bannerVideo from "../assets/videos/0ePYdjSbXI_MD.mp4";
import womenVideo from "../assets/videos/t9WlvhSlrc_MD.mp4";
import menVideo from "../assets/videos/ePOTG6lky2_MD.mp4";
import ombreNomadeImage from "../assets/HP_VN_Ombre_DII.jpg";
import LVServicesImage from "../assets/LV_Services_WW_HP_Push_DII.webp";
import ImageAndVideoBox from "../components/ImageAndVideoBox/ImageAndVideoBox.jsx";

const data = [
  {
    id: 1,
    img: "src/assets/images/Monogram_Bags_FR_HP_Product_Push_V0306_DI2.webp",
    title: "Iconic Monogram Bags",
    link: "#",
  },
  {
    id: 2,
    img: "src/assets/images/Women_Rings_WW_HP_Product_Push_V0308_DI2.webp",
    title: "Women's Rings",
    link: "#",
  },
  {
    id: 3,
    img: "src/assets/images/Masculine_Perfumes_WW_HP_Product_Push_V0308_DI2.webp",
    title: "Masculine Perfumes",
    link: "#",
  },
];

function Home() {
  const bannerVideoRef = useRef(null);
  const menVideoRef = useRef(null);
  const womenVideoRef = useRef(null);

  return (
    <div className='home'>
      <ImageAndVideoBox
        videoRef={bannerVideoRef}
        videoSrc={bannerVideo}
        title="Women's Fall-Winter 2024 Fashion Show"
        btnTextFirst='Watch the Full Show'
      />
      <div className='container'>
        {data.map((item) => (
          <div className='item'>
            <div className='item_img_box'>
              <img
                src={item.img}
                alt={item.img}
              />
            </div>
            <div className='item_info'>
              <span>{item.title}</span>
              <Link to={item.link}>Explore the Selection</Link>
            </div>
          </div>
        ))}
      </div>
      <ImageAndVideoBox
        videoRef={womenVideoRef}
        videoSrc={womenVideo}
        title="Women's Spring-Summer 2024 Collection"
        btnTextFirst='Discover the Collection'
        btnTextSecond='Explore the Campaign'
      />
      <ImageAndVideoBox
        videoRef={menVideoRef}
        videoSrc={menVideo}
        title="Men's New Formal"
        btnTextFirst='Discover the Collection'
        btnTextSecond="Explore All Men's Ready-To-Wear"
      />
      <ImageAndVideoBox
        imageSrc={LVServicesImage}
        title='Louis Vuitton Services'
        btnTextFirst='Discover'
      />
    </div>
  );
}

export default Home;
