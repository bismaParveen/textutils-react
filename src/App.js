import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          {/* <Routes> */}
            {/* /users --> Component 1 */}
            {/* /users/ --> Component 2 */}
{/* 
            <Route
              exact
              path="/"
              element={
                <div className="container my-3">
                  <TextForm
                    showAlert={showAlert}
                    heading="Enter the text to analyze below"
                    mode={mode}
                  />
                </div>
              }
            /> */}
            {/* <Route exact path="/about/*" element={<About />} /> */}
          {/* </Routes> */}
      {/* </BrowserRouter> */}
      {/* <About /> */}
      <div className="container my-3">
                  <TextForm
                    showAlert={showAlert}
                    heading="Enter the text to analyze below"
                    mode={mode}
                  />
                </div>
    </>
  );
}

export default App;
