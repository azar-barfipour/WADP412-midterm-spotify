import React from "react";

function Favourites({ tracks }) {
  return (
    <div>
      {tracks.map((track) => {
        return <div></div>;
      })}
    </div>
  );
}

export default Favourites;
