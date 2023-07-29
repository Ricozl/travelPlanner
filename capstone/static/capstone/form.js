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

    return {
        <div className='app'>
            (false ? (
                <div className='score-section'>You scored 1 out of </div>
            )) : (
                =>

                    <div className='question-section'>
                        <div className='question-count'>
                            <span=Quesetion 1</span>/(questions.length)
                    </div>
                    <div className='question-text'>(questionsText[0].questionText</div>
                    </div>
                    <div className='answer-section'>
                        (questions[0].answerOptions.map([answerOptions] => <button>(answerOptions.answerText)</button>))

                    </div>
                </>
            )}
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


