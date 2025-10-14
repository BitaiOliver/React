function Message() {
const name = "Oliver";

    // JSX Javascript XML
    if (name) {
        return <h1> Hello {name} </h1>;
    }
    else{
        return <h1> Hello Word </h1>;
    }
}

export default Message;