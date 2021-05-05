import { useEffect, useState } from 'react';
import axios from 'axios';

function SpotifyAuth(code) {
    const [accessToken, setAcessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    
    // contacting server to obtain an access token
    useEffect(() => {
        if (!code) return;
        
        axios({
            method: 'post',
            url: 'http://localhost:3001/login',
            data:{
                code: code
            }
        }).then(res => {
            // removes the code from the url
            window.history.pushState({}, null, '/');

            setAcessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
        }).catch((err) => {
            // redirects to root (login page) if any error occured when contacting the Spotify Web Api 
            window.location = '/';
        })
    }, [code]);

    // contacting the server to refresh the access token
    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const refresh = setTimeout(() => {
            // refreshing happens 1 minute before the token expires
            axios({
                method: 'post',
                url: 'http://localhost:3001/refresh',
                data: {
                    refreshToken: refreshToken
                }
            }).then(res => {
                // removes the code from the url
                window.history.pushState({}, null, '/');

                setAcessToken(res.data.accessToken);
                setExpiresIn(res.data.expiresIn);
            }).catch((err) => {
                // redirects to root (login page) if any error occured when contacting the Spotify Web Api 
                window.location = '/';
            })
        }, (expiresIn - 60)*1000); 

        // cancels timeout if 
        return () => clearTimeout(refresh);
    }, [refreshToken, expiresIn])

    return accessToken;
}

export default SpotifyAuth;