import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import './Player.css';

function Player({accessToken, trackUris}) {  
    // controls whether the player plays  
    const [play, setPlay] = useState(false);

    // set the player to play after the tracks change
    useEffect(() => {
        setPlay(true);
    }, [trackUris]);

    if (!accessToken) {
        return null;
    }

    return (
        <div className='playerContainer'>
            <SpotifyPlayer className='player'            
                token = {accessToken}
                play = {play}
                uris = {trackUris}
                callback = { state => {
                    if (!state.isPlaying){
                        setPlay(false);
                    }
                }}
            />
        </div>
    );
}

export default Player;