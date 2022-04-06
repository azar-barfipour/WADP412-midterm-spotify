import { Container } from "react-bootstrap";
import classes from "./Login.module.css";

const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL, REACT_APP_REDIRECT_URL } =
  process.env;

const AUTH_URL = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

function Login() {
  return (
    <Container
      className={`d-flex justify-content-center align-items-center ${classes.container}`}
    >
      <img
        className={classes.img}
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <a href={AUTH_URL} className={`btn btn-md ${classes.login}`}>
        Login with Spotify
      </a>
    </Container>
  );
}

export default Login;
