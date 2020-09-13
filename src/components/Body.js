import React from 'react'
import Header from './Header'
import './Body.css'
import { useDataLayerValue } from '../DataLayer'

function Body({ spotify }) {
    const [{ discover_weekly}, dispatch] =useDataLayerValue();

    return (
        <div className='body'>
            <Header spotify={spotify}/>

            <div className= 'body__info'>
                <img src='http://4.bp.blogspot.com/-piGq_p7F4Ag/UmftbhnK27I/AAAAAAAAAGY/p7MVvwhgaig/s1600/Other+Things.jpg'  alt='' />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description...</p>
                </div>
            </div>

        </div>
    )
}

export default Body
