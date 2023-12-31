import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#363636'
      document.title = "TestApp - Dark Mode"
      showAlert("Dark Mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = "TestApp - Light Mode"
      showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TestApp" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {<div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About mode={mode}/>}/>
            <Route exact path="/" element = {<TextForm heading="Enter the text to analyze below" mode={mode} />}/>
          </Routes>
        </div>}
      </Router>
    </>
  );
}

export default App;
