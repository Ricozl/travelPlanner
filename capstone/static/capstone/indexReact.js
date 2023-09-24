

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


    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const [showScore, setShowScore] = React.useState(false);

    const [score, setScore] = React.useState(0);

    const [result, setResult] = React.useState("")

    function handleRightAns (e) {
        // got question right
        setScore(score + 1);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion),
            <p>{questions[currentQuestion].text}</p>
        } else {
            setShowScore(true);
            setResult("Fantastico! You Won!")
        }
    };

    function handleClick (e) {
        // got answer wrong
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true);
            setResult("Nice try, but no cigar!")

        }
    };

    return (

    <div id="quizmap">
        <div className ="app">
            {!showScore ? (

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
                            <button id="answers" onClick = {() => answer.isCorrect ? handleRightAns() : handleClick()}>{answer.choice}</button>
                        ))}
                </div>
            </div>
            ) : (
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

{% endblock %}
