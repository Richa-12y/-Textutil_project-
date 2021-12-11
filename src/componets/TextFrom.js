import React, { useState } from 'react';

export default function TextForm (props)
{

    const handleUpClick = () =>
    {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }


    const handleLoClick = () =>
    {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
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

    const [text, setText] = useState("Enter Text here2");

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-Control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>


            </div>

            <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{text.split("").length } words and {text.length} characters.</p>
            <p>{0.008 * text.split("").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
        </>
    )
}
