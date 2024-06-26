
// code for React to run Quiz
// Array of questions and answers for quiz

function App() {

    const questions = [
        'What is cacio e Pepe?',
        'The Colosseum is called that because?',
        'In classical architecture, Romans invented?',
        'Traditional Roman food is largely composed of?',
        'In 1900 Romans avoided artichokes & eggplants because?'
    ]

    const answerList = [
        {
            answers: [
                {choice: 'Italian football (soccer) and Pete.', isCorrect: false},
                {choice: 'Pecorino Romano and pepper sauce for pasta.', isCorrect: true},
                {choice: 'Calcium and Vitamin B pills popular with Roman men.', isCorrect: false},
                {choice: 'The main ingredients of Roman concrete.', isCorrect: false},
            ]
        },
        {
            answers: [
                {choice: 'It is the Greek name for amphitheater.', isCorrect: false},
                {choice: "It is built on the site of Emperor Nero's front yard.", isCorrect: false},
                {choice: 'It is built on the site of a colossal statue of Emperor Nero.', isCorrect: true},
                {choice: 'Collo means hill in Italian and it is built on a hill.', isCorrect: false},
            ]
        },
        {
            answers: [
                {choice: 'The Arch.', isCorrect: false},
                {choice: 'Concrete buildings.', isCorrect: false},
                {choice: 'Long, straight roads.', isCorrect: false},
                {choice: 'All of the above.', isCorrect: true},
            ]
        },
        {
            answers: [
                {choice: 'Guts.', isCorrect: true},
                {choice: 'Steaks.', isCorrect: false},
                {choice: 'Beans.', isCorrect: false},
                {choice: 'Pasta and tomato sauce.', isCorrect: false},
            ]
        },
        {
            answers: [
                {choice: 'They were poisonous.', isCorrect: false},
                {choice: 'They were from America.', isCorrect: false},
                {choice: 'They were Jewish.', isCorrect: true},
                {choice: 'They were expensive.', isCorrect: false},
            ]
        },
    ]

    // Set state for different variables
    const [state, setState] = React.useState({
        showScore: false,
        score: 0,
        result: ""
    });

    const [currentQues, setCurrentQues] = React.useState(0);

    // function to handle right answers
    function handleRightAns (e) {
        // got question right, update score and move to next question
        setState({
            ...state,
            score: (state.score = state.score + 1)
        })
        const nextQuestion = currentQues + 1;

        // Check to see if at end of quiz, if not, get next question
        if (nextQuestion < questions.length) {
            setCurrentQues(nextQuestion),
            <p>{questions[currentQues]}</p>
        } else {
            // end of quiz, display score and result
            if (state.score < 5) {
                setState({
                    ...state,
                    showScore: true,
                    result: "Nice try, but no Cigar!"
                    
                })
            } else {
                setState({
                    ...state,
                    showScore: true,
                    result: "Fantastico: You Won!"
                })
            }
            
        }
    };

    // function to handle wrong answers
    function handleClick (e) {
        // got answer wrong, move to next question
        const nextQuestion = currentQues + 1;

        // check to see if end of quiz, if not, move to next question
        if (nextQuestion < questions.length) {
            setCurrentQues(nextQuestion)
        } else {
            // if end of quiz, show score and result
            setState({
                ...state,
                showScore: true,
                result: "Nice try, but no cigar!"
            })
        }
    };

    return (

    <div id="quizmap">
        <div className ="app">
            {!state.showScore ? (
            // show current score out of total questions, displays question with answers
            <div>
                <div className='score'>You scored {state.score} out of {questions.length}</div>
                <div className='questions'>
                        <div>
                            <span>Question {currentQues + 1}</span>/{questions.length}

                        </div>
                        <div className='quesText'>
                            <p id="ques">{questions[currentQues]}</p>

                        </div>
                    </div>
                    <div>
                        {answerList[currentQues].answers.map((answer) => (
                            // each answer is a button, checks if correct, goes to function to handle if right or wrong
                            <button id="answers" onClick = {() => answer.isCorrect ? handleRightAns() : handleClick()}>{answer.choice}</button>
                        ))}
                </div>
            </div>
            ) : (
            // game over, show results
            <div className="result">
                <h3>Result</h3>
                <p>
                    Total Questions: <span>{questions.length}</span>
                </p>
                <p>
                    Total Score:<span> {state.score}</span>
                </p>
                <div id="winner">
                    {state.result}
                </div>
            </div>
            )}
        </div>
    </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#app"));


