import React from 'react';
import './Trivia.css';

function Triva(props) {
    return (
        <div className='triviaDisplay'>
            <div className='choicesContainer'>
                <div className='choicesTop'>
                    <button className='answerOne'>A1</button>
                    <button className='answerTwo'>A2</button>
                </div>
                <div className='choicesBot'>
                    <button className='answerThree'>A3</button>
                    <button className='answerFour'>A4</button>
                </div>
            </div>
            <div className='questionContainer'>
                <div className='triviaQuestion'>Q</div>
            </div>
        </div>
    );
}

export default Triva;