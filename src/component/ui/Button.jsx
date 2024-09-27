function Button ({backgroundColor, children, onClick}) {
    return (
        <button onClick={onClick} style={{backgroundColor: backgroundColor, color: "white"}}>{children}</button>
    )
}

export default Button