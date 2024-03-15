import { createContext, useContext } from "react";

export const BtnToggleContext = createContext({
  togglePlay: ref => {},
  toggleMute: ref => {},
});

export const BtnToggleClickProvider = ({ children }) => {
  const togglePlay = ref => {
    if (ref.current.paused) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const toggleMute = ref => {
    ref.current.muted = !ref.current.muted;
  };

  return (
    <BtnToggleContext.Provider value={{ togglePlay, toggleMute }}>
      {children}
    </BtnToggleContext.Provider>
  );
};

export const useBtnToggleClick = () => {
  return useContext(BtnToggleContext);
};
