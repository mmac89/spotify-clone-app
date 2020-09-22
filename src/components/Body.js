import React from 'react'
import Header from './Header'
import './Body.css'
import { useDataLayerValue } from '../DataLayer'
import SongRow from './SongRow'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function Body({ spotify }) {
    const [{ discover_weekly}, dispatch] =useDataLayerValue();

    // const Player = ({ 
    //     spotify_uri, 
    //     playerInstance: {
    //         _options: {
    //             getOAuthToken,
    //             id
    //         }
    //     }
    // }) => {
    //     getOAuthToken(access_token => {
    //         fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
    //             method: 'PUT',
    //             body: JSON.stringify({ uris: [spotify_uri]
    //             }),
    //             Headers: {
    //                 'Content-Type': 'application/json' ,
    //                 'Authorization': `Bearer ${access_token}`
    //             },
    //         });
    //     });
    // };

    // player ({playerInstance: new SpotifyWebApi.Player({ 
    //     name: `spotify:track:${id.name}`
    // }),
    //     spotify_uri: `spotify:track:${id}`
    // });

    // }
    const playPlaylist = (id) => {
    
        spotify.play({ context_uri: `spotify:playlist:37i9dQZEVXcRG44erWZeyF`})
        .then ((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {

                console.log (res);
                dispatch ({
                    type: 'SET_ITEM',
                    item: r.item,
                });
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true,
                });
            });
        });
    }

    const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`]
        }).then((res) => {

            console.log(res);
            spotify.getMyCurrentPlayingTrack().then((res) =>{
                dispatch({
                    type:'SET_ITEM',
                    item: res.item,
                });
                dispatch({
                    type:'SET_PLAYING',
                    playing: true,
                });
            }) ;
        });
    };

    return (
        <div className='body'>
            <Header spotify={spotify}/>

            <div className= 'body__info'>
                <img src={discover_weekly?.images[0]?.url}  alt='' />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className='body__songs' >
                <div className='body__icons'>
                <PlayCircleFilledIcon onClick={playPlaylist} className='body__shuffle' />
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item =>(
                    <SongRow playSong={playSong} track={item.track}/>
                ))}
                
            </div>

        </div>
    )
};

export default Body
