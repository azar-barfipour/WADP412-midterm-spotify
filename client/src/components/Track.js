function Track({ track, chooseTrack }) {
  const playHandler = () => {
    chooseTrack(track);
  };
  return (
    <div
      onClick={playHandler}
      style={{ overflowY: "auto", cursor: "pointer" }}
      className="m-3 d-flex align-items-center"
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
