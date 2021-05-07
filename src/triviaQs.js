import axios from 'axios';

async function getTriviaQs() {
    // url to retrieve 50 multiple choice questions in Entertainment Music from Open Trivia DB
    // base64 encoded version
    const api_url = 'https://opentdb.com/api.php?amount=50&category=12&type=multiple&encode=base64';
    // url encoded version, seems less acurate in terms of encoding/decoding
    //const api_url = 'https://opentdb.com/api.php?amount=50&category=12&type=multiple&encode=url3986';

    let result = await axios.get(api_url);
    let q = [];

    // on a successful GET request
    if (result.data.response_code === 0){
        q = result.data.results.map((q) => {
            // decoding the base64 encoded correct answer
            const correctAnswer = atob(q.correct_answer);
            // randomizing the index of the correct answer
            const rand = Math.floor(Math.random() * 4);
            // decoding the based64 encoded answers
            const choices = q.incorrect_answers.map(a => {return atob(a)});
            // inserting the correct answer at the random position
            choices.splice(rand, 0, correctAnswer)
            // decoding the base64 encoded question
            return {question: atob(q.question),
                    correctAnswer: rand, 
                    choices: choices}});
    }

    // resolves the promise with a populated questions array ]
    // or rejects the promise with an empty questions array
    return new Promise((res, rej) => {
        if (q){
            res(q);
        } else {
            rej(q);
        }
    })
}

export default getTriviaQs;