import React, { useState } from 'react';
import SpotifyAuth from './SpotifyAuth';
import Sidebar from './Sidebar';
import Body from './Body';
import Player from './Player';
import Modal from './Modal';
import './Dashboard.css';

function Dashboard(props) {
    // obtaine an access token using the code from Spotify
    const accessToken = SpotifyAuth(props.code);
    const [playing, setPlaying] = useState();
    const [openModal, setOpenModal] = useState(false);

    function handleModalOpen() {
        setOpenModal(true);
    }

    function handleModalClose() {
        setOpenModal(false);
    }

    return (
        <div className='dashBoard'>
            <div className='columns'>
                <Sidebar playing={playing} handleModalOpen={handleModalOpen}/>
                <Body accessToken={accessToken} setPlaying={setPlaying}/>
            </div>
            <Player accessToken={accessToken} trackUris={playing?.uri} />
            <Modal openModal={openModal} handleModalClose={handleModalClose}></Modal>
        </div>
    )
}

export default Dashboard;