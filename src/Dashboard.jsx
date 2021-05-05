import React, { useState } from 'react';
import SpotifyAuth from './SpotifyAuth';
import Sidebar from './Sidebar';
import Body from './Body';
import Player from './Player';
import './Dashboard.css';

function Dashboard(props) {
    // obtaine an access token using the code from Spotify
    const accessToken = SpotifyAuth(props.code);
    const [playing, setPlaying] = useState();

    return (
        <div>
            <div className='columns'>
                <Sidebar playing={playing}/>
                <Body accessToken={accessToken} setPlaying={setPlaying}/>
            </div>
            <Player accessToken={accessToken} trackUris={playing?.uri}/>
        </div>
    )
}

export default Dashboard;