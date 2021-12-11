import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextFrom';
 
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Textutils"/>
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyze"/>
    </div>
    </> 
  );
}

export default App;