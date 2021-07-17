
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home'
import About from './Components/About'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      
      <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
