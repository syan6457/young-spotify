import React from 'react';
import './TrackDisplay.css';

function TrackDisplay({track, selectTrack}) {
    return (
        <div className='trackItem' onClick={() => selectTrack(track)}>
            <img src={track.albumUrl} alt='album art' height='64px' width='64px'/>
            <div className='titleAndArtist'>
                <div>{track.title}</div>
                <br></br>
                <div>{track.artist}</div>
            </div>
        </div>
    );
}

export default TrackDisplay;