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
            <React.Fragment>

                <div>{count}</div>

            </React.Fragment>
        );
    }

    ReactDOM.render(<App />, document.querySelector("#app"));
/*</script>*/