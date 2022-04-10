import SpotifyPlayer from "react-spotify-web-playback";
import classes from "./Player.module.css";

function Player({ accessToken, trackUri }) {
  console.log(trackUri);
  if (!accessToken) return null;
  return (
    <div className={classes["player-wrapper"]}>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}
        className={classes["player"]}
        styles={{
          activeColor: "#fff",
          bgColor: "#333",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      />
    </div>
  );
}

export default Player;
