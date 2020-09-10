import React from 'react'
import './Footer.css'

import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__albumLogo' src='http://4.bp.blogspot.com/-piGq_p7F4Ag/UmftbhnK27I/AAAAAAAAAGY/p7MVvwhgaig/s1600/Other+Things.jpg' alt='' />
                <div className='footer__songInfo'>
                    <h4>Song Title!</h4>
                    <p>Artist</p>
                </div>

            </div>

            <div className='footer__center'>
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineOutlinedIcon fontSize='large' className='footer__icon' />
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
