<script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

/*<script type="text/babel">*/
    function App() {
        const [count, setCount] = React.useState(0);

        function updateCount() {
            setCount(count + 1);
        }
        return (
            <div>
                <div>
                <img onclick="updateCount" id="heart" src="static/capstone/red-heart.png" style={{width:"20px", height:"20px"}}/>
                </div>
                <div>{count}</div>
            </div>
        );
    }

    ReactDOM.render(<App />, document.querySelector("#app"));
/*</script>*/