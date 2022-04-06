function Track({ track, chooseTrack }) {
  const playHandler = () => {
    chooseTrack(track);
  };
  return (
    <div
      onClick={playHandler}
      className="m-3 d-flex align-items-center"
      style={{ overflowY: "auto" }}
    >
      <img src={track.albumUrl.url}></img>
      <div className="m-3 text-light">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
}

export default Track;
