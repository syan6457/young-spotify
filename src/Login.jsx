import React from 'react';
import './Login.css';

function Login(props) {
    const auth_endpoint = 'https://accounts.spotify.com/authorize'
    const clientID = '8fdd97d3ea674907a02f38f39f755391';
    const response_type = 'code';
    const redirect_uri = 'https://young-spotify.vercel.app';
    const scopes = ['streaming',
                    'user-read-email', 
                    'user-read-private', 
                    'user-read-currently-playing',
                    'user-read-playback-state',
                    'user-modify-playback-state'];
    
    const auth_url = `${auth_endpoint}?client_id=${clientID}&redirect_uri=${redirect_uri}&scope=${scopes.join('%20')}&response_type=${response_type}`;

    return (
        <div className='login'>
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='Spotify Logo White' width='50%'></img>
            <a id='loginButton' className='button' href={auth_url}>Login to Spotify</a>
            <p id='label'>A Spotify Premium Account is required to use this app</p>
        </div>
    );
}

export default Login;