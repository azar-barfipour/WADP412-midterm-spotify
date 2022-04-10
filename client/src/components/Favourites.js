import React from "react";

function Favourites({ tracks }) {
  return (
    <div>
      {tracks.map((track) => {
        // if (track.title === "Ragan Whiteside") {
        return <div>{`fav: ${track.title}`}</div>;
        // }
      })}
    </div>
  );
}

export default Favourites;
