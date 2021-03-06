import  React, { useEffect } from 'react'
import './Footer.css'


import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined'
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { useDataLayerValue } from '../DataLayer'


function Footer({spotify}) {

    const [{ token, item, playing }, dispatch ] = useDataLayerValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((response) => {
            console.log (response)

            dispatch({
                type:'SET_PLAYING',
                playing: response.is_playing,
            });
            dispatch({
                type:'SET_ITEM',
                item: response.item,
            });
        })
    }, [spotify]);

    const handlePlayPause = () =>{
        if(playing){
            spotify.pause();
            dispatch({
                type: 'SET_PLAYING',
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: 'SET_PLAYING',
                playing: true,
            });
        };
    }


    return (
        <div className='footer'>
            <div className='footer__left'>
                <img 
                    className='footer__albumLogo' 
                    src={item?.album.images[0].url}
                     alt={item?.name} />
                    {item? (
                        <div className='footer__songInfo'>
                            <h4>{item.name}</h4>
                            <p>{item.artist.map((artist) => artist.name).join(', ')}</p>
                        </div> ) : (
                        <div className='footer__songInfo'>
                            <h4> No Song is Playing</h4>
                            <p>...</p>
                    </div>
                )}

            </div>

            <div className='footer__center'>
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className='footer__icon' />
                {playing? (
                    <PauseCircleOutlineOutlinedIcon onClick={handlePlayPause} 
                    fontSize='large' className='footer__icon' />
                    ):(<PlayCircleOutlineOutlinedIcon onClick={handlePlayPause}
                    fontSize='large' className='footer__icon' />)
                }
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' />


            </div>

            <div className= 'footer__right'>
            <Grid container spacing ={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-slider" />
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Footer
