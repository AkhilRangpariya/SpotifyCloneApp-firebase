import React, { useEffect } from "react";
// spotify connect with there service and large community
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

const s = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null); 
  const [{ token }, dispatch] = useStateValue();

  //  run code based on given condition 
  useEffect(() => {
    // access_token for authenticated user 
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      // connect spotify to react App
      s.setAccessToken(_token);

      // s.getMe().then((user) => {
      //   dispatch({
      // type: "SET_TOKEN",
      // token: _token,
      // });
      // });

      // decode the user taken information over here 
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // s.getPlaylist("1lkPYPp3nJOBX6LKn1h0lp").then((response) =>
      s.getPlaylist("5gdiUGzI2J1XAwOicWy5Ar").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      // take all playlist
      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);
  // variables are changes then run UseEffect

  return (
    <div className="app">
      {/* if token is not available then go to a login page  */}
      {!token && <Login />}
      {/* if token available then go to builded page  */}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
