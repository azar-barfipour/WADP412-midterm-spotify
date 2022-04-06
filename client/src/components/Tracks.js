import Track from "./Track";

function Tracks({ tracks, chooseTrack }) {
  return (
    <div>
      {tracks.map((track) => {
        return (
          <Track key={track.uri} track={track} chooseTrack={chooseTrack} />
        );
      })}
    </div>
  );
}

export default Tracks;
