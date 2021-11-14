function Children({count, children, setCount}) {
    return (
        <div>
            <h1>{count} count입니당</h1>
            {children}
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    );
}

export default Children;