import React, { useState } from 'react';

export default function TextForm (props)
{

    const handleUpClick = () =>
    {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to uppaercase!", "success")
    }


    const handleLoClick = () =>
    {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to lowercase!", "success")

    }

    const handleOnChange = (event) =>
    {
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleClearClick = (event) =>
    {
        let newText = '' ;
        setText(newText)

    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const [text, setText] = useState("Enter Text here2");

    return (
        <>
            <div className='container'>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split("").length } words and {text.length} characters.</p>
            <p>{0.008 * text.split("").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
