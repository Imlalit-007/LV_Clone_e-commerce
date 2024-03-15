import React, { useState, useRef, useEffect } from "react";
import "../../styles/ImageAndVideoBox.css";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";
import { GoMute, GoUnmute } from "react-icons/go";
import {
  Button,
  PlayPauseButton,
  MuteUnmuteButton,
} from "../../components/Buttons/Button.jsx";
import { useBtnToggleClick } from "../../context/BtnToggleClick/BtnToggleClick.jsx";

const ImageAndVideoBox = ({
  videoRef,
  videoSrc,
  imageSrc,
  title,
  btnTextFirst,
  btnTextSecond,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  if (videoSrc && videoRef) {
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
            setIsPlaying(true)
          } else {
            videoRef.current.pause();
            setIsPlaying(false)
          }
        });
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(videoRef.current);

      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, []);
  }

  const { togglePlay, toggleMute } = useBtnToggleClick();

  const handleTogglePlay = (videoReference) => {
    togglePlay(videoReference);
    setIsPlaying(!isPlaying);
  };

  const handleToggleMute = (videoReference) => {
    toggleMute(videoReference);
    setIsMuted(videoReference.current.muted);
  };

  return (
    <div className='video_and_img_container'>
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
        >
          <source
            src={videoSrc}
            type='video/mp4'
          ></source>
        </video>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageSrc}
        />
      )}
      {videoSrc && videoRef ? (
        <>
          <PlayPauseButton
            click={() => handleTogglePlay(videoRef)}
            icon={isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
          />
          <MuteUnmuteButton
            className='btn_mute_unmute'
            click={() => handleToggleMute(videoRef)}
            icon={isMuted ? <GoMute /> : <GoUnmute />}
          />
        </>
      ) : null}

      <div className='video_and_img_text_btn'>
        <span>{title}</span>
        <div className=' video_and_img_btn'>
          <Button text={btnTextFirst} />
          {btnTextSecond && <Button text={btnTextSecond} />}
        </div>
      </div>
    </div>
  );
};

export default ImageAndVideoBox;
