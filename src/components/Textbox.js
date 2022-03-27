import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Textbox(props) {
    const [text, setText] = useState("");
    // const [word, setWord] = useState("0");

    const textArea = useRef();

    const handleChange = (event) => {
        setText(event.target.value)
        console.log(text)
    }
    const toUpperCase =
        () => {
            const lettercase = text.toUpperCase();
            setText(lettercase)
            if (text !== '')
                props.showAlert("Converted to uppercase", "success");
        }
    const toLowerCase = () => {
        const lettercase = text.toLowerCase();
        setText(lettercase)
        if (text !== '')
            props.showAlert("Converted to lowercase", "success");
    }
    const clear = () => {
        setText("");
        textArea.current.focus();
        if (text !== '')
            props.showAlert("Cleared ", "success");
    }

    const copy = () => {
        navigator.clipboard.writeText(text);
        if (text !== '')
            props.showAlert("Copied to Clipboard", "success");
    }
    


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <div className="form-group green-border">
                    <h3>Your Text Area For Analysis</h3>
                    <textarea ref={textArea} className={`form-control border border-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#e5e5e5' : 'white', color: props.mode === 'dark' ? 'black' : 'black' }} id="exampleFormControlTextarea4" rows="6" onChange={handleChange}
                        value={text} ></textarea>
                </div>
                <button type="button" className="btn btn-danger my-1" onClick={toUpperCase}>UpperCase</button>
                <button type="button" className="btn btn-danger my-1 mx-2" onClick={toLowerCase}>LowerCase</button>
                <button type="button" className="btn btn-danger my-1 " onClick={copy}>Copy</button>
                <button type="button" className="btn btn-danger my-1 mx-2" onClick={clear}>Clear</button>
                <button type="button" className="btn btn-danger my-1 mx-2 findReplaceClass" ><Link to="find_replace">Find & Replace</Link></button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h3>Your Preview</h3>
                <p>{text}</p>
                <br />
                <h3>Your Text Analysis</h3>
                <p>No of Words : {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>
                <p>No of Letters : {text.length}</p>
            </div>
        </>
    )
}
