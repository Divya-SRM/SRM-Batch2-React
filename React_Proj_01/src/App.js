import logo from './logo.svg';
import './App.css';
import Labelname from './Labelname.js';

function App() {
  const userName="Divya";
  const dte=new Date();
  return (  
    <div className="App">
      <h1>{userName}</h1>
      <h2>{dte.toString()}</h2>
      <Labelname value={userName}/>
    </div>
  )
}

export default App;
