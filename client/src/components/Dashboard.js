import { useState, useEffect } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";
import Tracks from "./Tracks";
import Player from "./Player";
import { Form, Container } from "react-bootstrap";
import classes from "./Dashboard.module.css";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
});

function Dashboard({ code }) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [playing, setPlaying] = useState();

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_REDIRECT_URL}login`, { code })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestImage = track.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, track.album.images[0]);
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestImage,
          };
        })
      );
    });
  }, [search, accessToken]);

  const chooseTrack = (track) => {
    setPlaying(track);
    setSearch("");
  };

  return (
    <>
      <Container>
        <Form.Control
          type="search"
          value={search}
          placeholder="search for Artists/Songs"
          onChange={(e) => setSearch(e.target.value)}
          className={classes.container}
        ></Form.Control>
        {searchResults && (
          <Tracks tracks={searchResults} chooseTrack={chooseTrack} />
        )}
      </Container>
      <Player accessToken={accessToken} trackUri={playing?.uri} />
    </>
  );
}

export default Dashboard;
