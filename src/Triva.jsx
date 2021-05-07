import React, { useState } from 'react';
import './Trivia.css';

function Triva({trivias, updateTriviaScore, questionIndex, updateQuestionIndex}) {
    // travia = {question: string,
    //             correctAnswer: index,
    //             choices: array[4]}
    const [message, setMessage] = useState('Good Luck Have Fun');

    if (questionIndex === 50) {
        setMessage("You've completed the trivia challenge. Click Next to restart or click Close to leave the game.")

        return(
            <div className='triviaDisplay'>
                <div className='choicesContainer'>
                    <div className='choicesTop'>
                        <button className='answerOne' data-choice={1}>A1</button>
                        <button className='answerTwo' data-choice={2}>A2</button>
                    </div>
                    <div className='choicesBot'>
                        <button className='answerThree' data-choice={3}>A3</button>
                        <button className='answerFour' data-choice={4}>A4</button>
                    </div>
                </div>
                <div className='questionContainer'>
                    <div className='triviaQuestion'>Q</div>
                </div>
                <div className='messageDisplay'>{message}</div>
            </div>
        )
    } else {
        const trivia = trivias[questionIndex];
        const answer1 = trivia.choices[0];
        const answer2 = trivia.choices[1];
        const answer3 = trivia.choices[2];
        const answer4 = trivia.choices[3];
        const correctAnswer = trivia.correctAnswer;
        const question = trivia.question;

        function handleQuestionAnswer(e){
            if (e.target.dataset.choice === correctAnswer){
                setMessage('You were correct. Well done.');
                updateTriviaScore();
            } else {
                setMessage("That answer didn't seem right");
            }
            updateQuestionIndex();
        }

        return (
            <div className='triviaDisplay'>
                <div className='messageDisplay'>{message}</div>
                <div className='choicesContainer'>
                    <div className='choicesTop'>
                        <button className='answerOne' data-choice={1} onClick={handleQuestionAnswer}>{answer1}</button>
                        <button className='answerTwo' data-choice={2} onClick={handleQuestionAnswer}>{answer2}</button>
                    </div>
                    <div className='choicesBot'>
                        <button className='answerThree' data-choice={3} onClick={handleQuestionAnswer}>{answer3}</button>
                        <button className='answerFour' data-choice={4} onClick={handleQuestionAnswer}>{answer4}</button>
                    </div>
                </div>
                <div className='questionContainer'>
                    <div className='triviaQuestion'>{question}</div>
                </div>
            </div>
        );
    }
}

export default Triva;