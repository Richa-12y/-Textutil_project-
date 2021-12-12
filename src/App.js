import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextFrom';
import React, { useState } from 'react';
import Alert from './componets/Alert';

 
function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert=(message , type)=>{
    setAlert ({
      msg:message,
      type:type
    })
  }

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'gray';
        showAlert("Dark mode has been enable","success")

      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable","success")

      }
 
}
  return (
       
  
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
    <About alert={"alert"}/>
    </div>
    </> 
  );
}

export default App;