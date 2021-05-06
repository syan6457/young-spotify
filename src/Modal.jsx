import React from 'react';
import './Modal.css';
import Trivia from './Triva';
import trivias from './triviaQs.js';

function Modal({ openModal, handleModalClose}) {
    if (!openModal) {
        return null;
    }

    return (
        <>
            <div className='modalOverlay'></div>
            <div className='modalContainer'>
                <button className='nextQuestionButton'>Next</button>
                <button className='modalCloseButton' onClick={handleModalClose}>Close</button>
                <div className="modalBox">
                    <Trivia/>
                </div>
            </div>
        </>
    );
}

export default Modal;