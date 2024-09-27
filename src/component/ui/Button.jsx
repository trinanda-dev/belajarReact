function Button ({backgroundColor, children, onClick, Loading}) {
    return (
        <button onClick={onClick} style={{backgroundColor: backgroundColor, color: "white"}}>
            {Loading === true? "Loading ..." : children}
            </button>
    )
}

export default Button