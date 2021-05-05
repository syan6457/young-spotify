import React, { useState } from 'react';
import axios from 'axios';
import './Lyrics.css';

function Lyrics({playing}) {
    const [lyrics, setLyrics] = useState();

    if (!playing) return(
        <div>Search and play a song to view lyrics</div>
    );

    const apiUrl = 'https://api.lyrics.ovh/v1';
    const title = playing.title;
    const artist = playing.artist;
    const searchURL = encodeURI(`${apiUrl}/${artist}/${title}`)

    axios({
        method: 'get',
        url: searchURL
    }).then((res) => {
        const lyricsRes = res.data.lyrics;
        setLyrics(lyricsRes);
    }).catch(() => {
        setLyrics('');
    })

    if (lyrics) {
        return(
            <span className='lyrics'>
                {lyrics}
            </span>
        )
    } else {
        return(
            <span className='noLyrics'>No Lyrics Found</span>
        )
    }
}

export default Lyrics;