import React, { useEffect, useState } from 'react';
import './App.css'; 
import Login from './components/Login'
import { getTokenFromUrl } from './spotify';
//import spotifyWebApi from 'spotify-web-api-js';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();


function App() {

  const [token, setToken] = useState(null);

  const [ {user} , dispatch] = useDataLayerValue();

  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {

       
        dispatch({
          type: "SET_USER",
          user: user
        });
      });
    }

    console.log("I HAVE A TOKEN ", token);
  }, []);

  console.log('is there a user', user);
  return (
    <div className="app">
      {
        token? (
          <Player/>
        ) : (      
        <Login />
        )
      }
    </div>
  );
}

export default App;
