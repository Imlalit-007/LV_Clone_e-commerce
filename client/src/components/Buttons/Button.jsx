import "../../styles/Button.css";

function Button({ text }) {
  return <button className='custom_btn'>{text}</button>;
}

function PlayPauseButton({ click, icon }) {
  return (
    <button
      onClick={click}
      className='btn_play_pause'
    >
      {icon}
    </button>
  );
}

function MuteUnmuteButton({ click, icon }) {
  return <button onClick={click} className='btn_mute_unmute'>{icon}</button>;
}

export { Button, PlayPauseButton, MuteUnmuteButton };
