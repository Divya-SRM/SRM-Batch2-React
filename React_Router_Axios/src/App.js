import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Register from './Components/Register'
import View from './Components/View'
import Search from './Components/Search'
import Home from './Components/Home'
import AxiosFetch from './Components/AxiosFetch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div className="App">
        <table>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/view"> View </Link>
        </li>
        <li>
          <Link to="/search"> Search </Link>
        </li>
        <li>
          <Link to="/search1"> SearchAxios </Link>
        </li>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/view" exact component={View}></Route>
          <Route path="/search" exact component={Search}></Route>
          <Route path="/search1" exact component={AxiosFetch}></Route>
          
        </Switch>
        </table>
      </div>
    </Router>
        
      </header>
    </div>
  );
}

export default App;
