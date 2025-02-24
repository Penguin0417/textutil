import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({msg: message, type: type});
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const blackMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#0d1234";
      showAlert("Light mode is enabled.", "Success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#0d1234";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled.", "Success");
    }
  };
  const greenMode = () => {
      setMode("green");
      document.body.style.backgroundColor = "#237a25";
      document.body.style.color = "white";
      document.querySelector(".navbar").style.backgroundColor = "#0f5c08";
      showAlert("Green mode is enabled.", "Success");
  };
  const redMode = () => {
    setMode("red");
    document.body.style.backgroundColor = "#BC2626";
    document.body.style.color = "white";
    document.querySelector(".navbar").style.backgroundColor = "#910E0E";
    showAlert("Red mode is enabled.", "Success");
};
const yellowMode = () => {
  setMode("red");
  document.body.style.backgroundColor = "rgb(175 121 31)";
  document.body.style.color = "white";
  document.querySelector(".navbar").style.backgroundColor = "rgb(78 81 11)";
  showAlert("Yellow mode is enabled.", "Success");
};
  return (
    <>
      <Navbar title="TextUtils" mode={mode} blackMode={blackMode} greenMode={greenMode} redMode={redMode} yellowMode={yellowMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm title="Enter your text below to analyze.." showAlert={showAlert} mode={mode}/>
      </div>
      {/* <div className="container my-3">
      <About />
      </div> */}
    </>
  );
}
export default App;
