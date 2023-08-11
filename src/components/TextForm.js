import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        console.log("Lowercase was Clicked")
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = ()=>{
        console.log("Clear was Clicked")
        setText("");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Text Here");

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} style={{backgroundColor: props.mode==='dark'?'#1e1e1e':'white', color: props.mode==='dark'?'white':'black'}} onChange = {handleOnChange} id="myBox" rows="9"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summery</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length - text.split(" ").length + 1} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p>
        </div>
        </>
    )
}

