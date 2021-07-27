let visibility = false ;


const toggleVisibility = () => {
    visibility = !visibility
    render()
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toogle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                <p>These are some details you can now see!</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
}

render()