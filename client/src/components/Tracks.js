import Track from "./Track";
import classes from "./Tracks.module.css";
import Favourites from "./Favourites";

function Tracks({ tracks, chooseTrack }) {
  return (
    <div className={classes["tracks-wrapper"]}>
      {tracks.map((track) => {
        return (
          <Track key={track.uri} track={track} chooseTrack={chooseTrack} />
        );
      })}
      <Favourites tracks={tracks} />
    </div>
  );
}

export default Tracks;
