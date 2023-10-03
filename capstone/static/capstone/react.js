
// code for React to run Quiz
// Array of questions and answers for quiz

function App() {
    const questions = [
        {
            text:  "What is cacio e Pepe?",
            answers: [
                { choice: 'Italian football (soccer) and Pete.', isCorrect: false},
                { choice: 'Pecorino Romano and pepper sauce for pasta.', isCorrect: true },
                { choice: 'Calcium and Vitamin B pills popular with Roman men.', isCorrect: false },
                { choice: 'The main ingredients of Roman concrete.', isCorrect: false },
            ],
        },
        {
            text: 'The Colosseum is called that because?',
            answers: [
                { choice: 'It is the Greek name for amphitheater.', isCorrect: false },
                { choice: "It is built on the site of Emperor Nero's front yard.", isCorrect: false },
                { choice: 'It is built on the site of a colossal statue of Emperor Nero.', isCorrect: true },
                { choice: 'collo means hill in Italian and it is built on a hill.', isCorrect: false },
            ],
        },
        {
            text: 'In classical architecture, Romans invented?',
            answers: [
                { choice: 'The Arch.', isCorrect: false },
                { choice: 'Concrete buildings.', isCorrect: false },
                { choice: 'Long, straight roads.', isCorrect: false },
                { choice: 'All of the above.', isCorrect: true }
            ],
        },
        {
            text: 'Traditional Roman food is largely composed of?',
            answers: [
                { choice: 'Guts.', isCorrect: true },
                { choice: 'Steaks.', isCorrect: false },
                { choice: 'Beans.', isCorrect: false },
                { choice: 'Pasta and tomato sauce.', isCorrect: false }
            ],
        },
        {
            text: 'One hundred years ago, Romans avoided artichokes and eggplants because?',
            answers: [
                { choice: 'They were poisonous.', isCorrect: false },
                { choice: 'They were from America.', isCorrect: false },
                { choice: 'They were Jewish.', isCorrect: true },
                { choice: 'They were expensive.', isCorrect: false }
            ],
        },
    ];

    // Set state for different variables
    const [state, setState] = React.useState({
        currentQuestion: 0,
        showScore: false,
        score: 0,
        result: ""
    });

    //const [currentQuestion, setCurrentQuestion] = React.useState(0);

    //const [showScore, setShowScore] = React.useState(false);

    //const [score, setScore] = React.useState(0);

    //const [result, setResult] = React.useState("")

    // function to handle right answers
    function handleRightAns (e) {
        // got question right, update score and move to next question
        //setScore(score + 1);
        setState({
            ...state,
            score: score + 1
        })
        const nextQuestion = currentQuestion + 1;
        console.log(nextQuestion)

        // Check to see if at end of quiz, if not, get next question
        if (nextQuestion < questions.length) {
            setState({
                ...state,
                currentQuestion: nextQuestion
            })
            //setCurrentQuestion(nextQuestion),
            <p>{questions[state.currentQuestion].text}</p>
        } else {
            // end of quiz, display score and result
            setState({
                ...state,
                showScore: true,
                result: "Fantastico: You Won!"
            })
            //setShowScore(true);
            //setResult("Fantastico! You Won!")
        }
    };

    // function to handle wrong answers
    function handleClick (e) {
        // got answer wrong, move to next question
        const nextQuestion = currentQuestion + 1;

        // check to see if end of quiz, if not, move to next question
        if (nextQuestion < questions.length) {
            setState({
                ...state,
                currentQuestion: nextQuestion
            })
            //setCurrentQuestion(nextQuestion)
        } else {
            // if end of quiz, show score and result
            setState({
                ...state,
                showScore: true,
                result: "Nice try, but no cigar!"
            })
            //setShowScore(true);
            //setResult("Nice try, but no cigar!")

        }
    };

    return (

    <div id="quizmap">
        <div className ="app">
            {!showScore ? (
            // show current score out of total questions, displays question with answers
            <div>
                <div className='score'>You scored {score} out of {questions.length}</div>
                <div className='questions'>
                        <div className='quesCount'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}

                        </div>
                        <div className='quesText'>
                            <p id="ques">{questions[currentQuestion].text}</p>

                        </div>
                    </div>
                    <div className='answerSection'>
                        {questions[currentQuestion].answers.map((answer) => (
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
                    Total Score:<span> {score}</span>
                </p>
                <div id="winner">
                    {result}
                </div>
            </div>
            )}
        </div>
    </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#app"));


