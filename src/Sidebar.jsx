import React from 'react';
import Lyrics from './Lyrics';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

// left portion of the dashboard
function Sidebar({ playing, handleModalOpen}) {
    return (
        <div className='dSidebar'>
            <div className='topbarContainer'>
                <div className='toggleContainer'>
                    <button className='toggleButton'><FontAwesomeIcon className='toggleIcon' icon={faAdjust} onClick={toggle}/></button>
                </div>
                <div className='modalButtonContainer'>
                    <button className='modalButton' onClick={handleModalOpen}>Challenge a music trivia</button>
                </div>
            </div>
            <div className='lyricsContainer'><Lyrics playing={playing}/></div> 
        </div>
    );
}

export default Sidebar;

// Light/Dark mode toggle 
function toggle(){
    const body = document.querySelector('body');

    if (body.classList.contains('darkMode')){
        body.classList.remove('darkMode');
        document.querySelector('.searchBar').style.backgroundColor = '#fafafa';
    } else {
        body.classList.add('darkMode');
        document.querySelector('.searchBar').style.backgroundColor = 'lightgrey';
    }
}