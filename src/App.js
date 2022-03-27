
import './App.css';
import Navbar from './components/Navbar';
import Find_Replace from './components/Find_Replace';
import About from './components/About';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");//whether dark mode is eanbled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null); }, 900);
  }


  const enable_mode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'rgb(256,256,200)';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <About/> */}
      <div className="cotainer">
        <Router>
        <Navbar title="TextUtils" mode={mode} enable_mode={enable_mode} />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/find_replace" element={<Find_Replace  mode={mode}/>} />
            <Route exact path="/" element={<Textbox showAlert={showAlert} mode={mode} />} />
          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;
