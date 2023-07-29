import React, {useState} from 'react';

export default function App() {
    const questions = [
        {
            questionText: "What is the capital of France?",
            answerOptions: [
                { answerText: 'New York', isCorrect: false},
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false }
            ],

        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false }
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const handleAnswerButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            set currentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

    };

    return {
        <div className='app'>
            (showScore ? (
                <div className='score-section'>You scored 1 out of (questions.length)</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span=Quesetion 1</span>/(questions.length)
                    </div>
                    <div className='question-text'>{questionsText[currentQuestion]}</div>
                    </div>
                    <div className='answer-section'>
                        (questions[currentQuestion].answerOptions.map([answerOption] =>
                            <button onClick(() => handleAnswerButtonClick(answerOption.isCorrect)>{answerOptions.answerText}</button>
                        )))

                    </div>
                </>
            )}
        </div>

}

function Form() {
        const [useState] = React
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        function handleSubmit(e) {
            e.preventDefault()
            console.log("email", email)
            console.log("password", password)
        }
    return (
        <form className="at-8 space-y-6" onSubmit="handleSubmit(e)">
            <div>
                <label for="email-address"
                    className="sr-only">Email Address</label>
                <input id="email-address"
                    name="email"
                    type="email"
                    autocomplete="off"
                    required
                    placeholder="Email address"
                    value={email}
                    onInput="[(e) => setEmail(e.target.value)]"
                    />
            </div>
            <div>
                <label for="password"
                    className="sr-only">Password</label>
                <input id="password"
                    name="password"
                    type="password"
                    autocomplete="off"
                    required
                    placeholder="Password"
                    value={password}
                    onInput="[(e) => setPassword(e.target.value)]"
                    />
            </div>
        </form>
    )

};
ReactDOM.render(<Form />, document.querySelector("#form"))


