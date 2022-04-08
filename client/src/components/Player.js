import SpotifyPlayer from "react-spotify-web-playback";
import classes from "./Player.module.css";

function Player({ accessToken, trackUri }) {
  if (!accessToken) return null;
  return (
    <div className={classes["player-wrapper"]}>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}
      />
    </div>
  );
}

export default Player;
