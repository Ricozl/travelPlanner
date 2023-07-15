


function form() {
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
                    onInput="(e) => setEmail(e.target.value)"
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
                    onInput="(e) => setPassword(e.target.value)"
                    />
            </div>
        </form>
    )
};
ReactDOM.render(<form.html />, document.querySelector("#form"))


