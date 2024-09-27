function Button ({backgroundColor, children, onClick, Loading}) {
    return (
        <button className={"text-2xl font medium bg-purple-400 px-4 py-2 m-5"}
        onClick={onClick}>
            {Loading === true? "Loading ..." : children}
            </button>
    )
}

export default Button