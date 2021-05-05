import React, { useEffect, useState } from 'react';
import './Body.css';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackDisplay from './TrackDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMicrophone, faMicrophoneSlash} from '@fortawesome/free-solid-svg-icons'; 

const SpotifyApi = new SpotifyWebApi({
    clientId: '8fdd97d3ea674907a02f38f39f755391'
})

function Body({accessToken, setPlaying}) {
    SpotifyApi.setAccessToken(accessToken);
    // watching the searchbar input
    const [search, setSearch] = useState('');
    // watching the search results from Spotify
    const [searchRes, setSearchRes] = useState([]);
    // watching the voice recogniton status
    const [mic, setMic] = useState(true)

    // letting Dashboard know a track is set to be played
    function selectTrack(track){
        setPlaying(track);
        //setSearch();
    }

    // search Spotify once the searchbar input changes
    useEffect(() => {
        if (!accessToken) return;
        if (!search) {
            setSearchRes([]);
            return;
        }

        // calling api to search spotify catalog
        // for each song, the app reports the name of the first artist, the song title, and the smallest album image
        // track uri is saved to play the song if requested 
        SpotifyApi.searchTracks(search).then(res => {
            setSearchRes(res.body.tracks.items.map(track => {
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: track.album.images.reduce((img, curr) => {
                        if (curr.height < img.height) return curr;
                        return img;
                    }).url
                }
            }))
        })
    }, [search, accessToken]);

    if (!accessToken) return null;

    // Web Speech API    
    let speech = null;
    let transcript = '';

    if (window.webkitSpeechRecognition){
        speech = new window.webkitSpeechRecognition();
        // speech.continuous = true;
        speech.onstart = () => {
            transcript ='';
            document.querySelector('.searchBar').value = '';
            document.querySelector('.searchBar').focus();
            setSearch('');
        }
        speech.onend = () => {
            transcript = '' ;
            setMic(true);
        }
        speech.onresult = (e) => {
            // obtaining the recorded speech
            transcript += e.results[e.results.length-1][0].transcript;
            // using the obtained speech to search Spotify
            document.querySelector('.searchBar').value = transcript;
            document.querySelector('.searchBar').focus();
            setSearch(transcript);
        }
    }

    // WebSpeechAPI's .stop() doesn't seem to work at the moment
    function handleMicButton() {
        if (mic) {
            setMic(false);
            speech.start();
        } else {
            setMic(true);
            speech.stop();
        }
    }

    return (
        <div className='dBody'>
            <form className='searchBarContainer'>
                <input className='searchBar' type='text' placeholder='Search a song, an album, or an artist' onChange={e => setSearch(e.target.value)}></input>
                {window.webkitSpeechRecognition ? <MicButton mic={mic} handleMicButton={handleMicButton}/> :
                        <button type='button' className='micSlashButton'
                            onClick={() => alert('The browser does not support WebSpeech API. \r\nPlease type your search terms.')}>
                            <FontAwesomeIcon id='micSlash' className='micIcon' icon={faMicrophoneSlash}/>
                        </button>
                }
            </form>
            <div className='display'>
                {searchRes.map(track => {
                    return <TrackDisplay track={track} key={track.uri} selectTrack={selectTrack}/>
                })}
            </div>
        </div>
    );
}

export default Body;

function MicIcon({mic}){
    if (mic){
        return(
            <FontAwesomeIcon id='mic' className='micIcon' icon={faMicrophone}/>
        )
    } else {
        return(
            <FontAwesomeIcon id='micSlash' className='micIcon' icon={faMicrophoneSlash}/>
        )
    }
}

// remaking the button for positoning purposes
// the mic icons have different widths
function MicButton({ mic, handleMicButton}){
    if (mic){
        return(
            <button type='button' className='micButton' onClick={handleMicButton}>
                <MicIcon mic={mic} />
            </button>
        )
    } else {
        return(
            <button type='button' className='micSlashButton' onClick={handleMicButton}>
                <MicIcon mic={mic} />
            </button>
        )
    }
}