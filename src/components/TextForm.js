import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Clicked");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Upper Case.", "Success");
  };
  const onChange = (event) => {
    setText(event.target.value);
  }; 
  const handleClrClick = () =>{
    setText("");
  }
  const countWords = (text) => {
    const value = text
      .trim()
      .split(" ")
      .filter((word) => word.length > 0).length;
    return value || 0; // Simplified return statement
  };
  return (
    <>
      <div className="mb-3">
        <h3>{props.title}</h3>
        <textarea
          className="form-control"
          onChange={onChange}
          id="text-area"
          rows="8"
          value={text}
        ></textarea>
        <br />
        <button className={`btn btn-${props.mode==="green"?"success":"primary"}`} onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClrClick}>
          Clear Text
        </button>
      </div>
      <div className="container">
        <h1>Summary</h1>
        {countWords(text)} words and {text.length} letters.
        <h2>Preview</h2>
          {text}
      </div>
    </>
  );
}
