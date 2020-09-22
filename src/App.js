import React, { useEffect, useState } from 'react';
import './App.css'; 
import Login from './components/Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();


function App() {

  //const [token, setToken] = useState(null);

  const [ { user, token } , dispatch] = useDataLayerValue();


  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.getMyTopArtists().then((response) => {
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response,
        })
      })

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify,
      })

      spotify.getMe().then((user) => {

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcRG44erWZeyF').then(response =>
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      )
    }
  }, []);

  return (
    <div className="app">
      {

        token? (
          <Player spotify={spotify}/>
        ) : (      
        <Login />
        )
      }
    </div>
  );
}

export default App;
