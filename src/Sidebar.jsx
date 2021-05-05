import React from 'react';
import Lyrics from './Lyrics';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Sidebar({playing}) {
    return (
        <div className='dSidebar'>
            <div className='topbarContainer'>
                <div className='toggleContainer'>
                    <button className='toggleButton'><FontAwesomeIcon className='toggleIcon' icon={faAdjust} onClick={() => alert('Toggle')}/></button>
                </div>
                <div className='userContainer'>
                    <button className='userLoginButton'><FontAwesomeIcon className='userLoginIcon' icon={faUserCircle} onClick={() => alert('User')}/></button>
                    <div className='userInfo'>
                        <p>This is where users go</p>
                    </div>
                </div>
            </div>
            <div className='lyricsContainer'><Lyrics playing={playing}/></div> 
        </div>
    );
}

export default Sidebar;