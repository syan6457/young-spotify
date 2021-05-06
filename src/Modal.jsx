import React, {useEffect, useRef, useState} from 'react';
import './Modal.css';
import Trivia from './Triva';
import getTrivias from './triviaQs.js';

function Modal({ openModal, handleModalClose }) {
    const [triviaScore, setTriviaScore] = useState(0);
    const [trivias, setTrivias] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);

    // onstart function to fetch 50 trivias from Open Trivia DB API
    useEffect(() => {
        fetchTrivias();
    }, []);
    
    function fetchTrivias(){
        getTrivias().then((res) => {
            setTrivias(res);
        })
    }

    function updateTriviaScore(){
        setTriviaScore(triviaScore + 1);
    }

    function updateQuestionIndex(){
        setQuestionIndex(questionIndex + 1)
    }

    // resetting questions after all 50 have been answered
    function resetQuestions(){
        setQuestionIndex(0);
        setTriviaScore(0);
    }

    function handleNext(){
        if (questionIndex == 50){
            resetQuestions();
        } else {
            updateQuestionIndex();
        }
    }

    // returns an empty div when modal is closed
    if (!openModal) {
        return <div className='modalShell'></div>;
    }

    return (
        <div className='modalShell'>
            <div className='modalOverlay'></div>
            <div className='modalContainer'>
                <div className='scoreDisplay'>Score:  {triviaScore}</div>
                <button className='nextQuestionButton' onClick={handleNext}>Next</button>
                <button className='modalCloseButton' onClick={handleModalClose}>Close</button>
                <div className="modalBox">
                    <Trivia trivias={trivias} questionIndex={questionIndex} 
                    updateTriviaScore={() => updateTriviaScore()} updateQuestionIndex={() => updateQuestionIndex()}/> 
                </div>
            </div>
        </div>
    );
}

export default Modal;

