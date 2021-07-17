
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import View from './Components/View';
import Home from'./Components/Home';
import NavbarCon from './Components/NavbarCon';
import Edit from './Components/Edit';
import EditUser from './Components/EditUser';
import Dashboard from './Components/Dashboard.js';
import Login from './Components/Login.js';
import {useState } from 'react';


function App() {
  const[isAuth,setIsAuth]=useState(true);
  const handleUserAddition=(e)=>{
    console.log("Parent Component");
    console.log(e);
    setIsAuth(e);
    console.log("---"+isAuth);
  }
  const links = [
    { id: 1, menu: "/edit", desc: "Edit" },
    { id: 3, menu: "/view", desc: "View" }
  ];
  
  return (
    <div className="App">
     <Router>
       {console.log("return")}
      
     <NavbarCon data={isAuth}/>

      <Switch>
        <Route  path='/view' flag={isAuth} exact component={View} />
        <Route  path='/edit' flag={isAuth} exact component={Edit} />
        <Route  path='/edit/edituser/:id' flag={isAuth} exact component={EditUser} />
        <Route  path='/dashboard' flag={isAuth}  exact component={Dashboard} />
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        
       
      </Switch>
    </Router>
    </div>
  );
}

export default App;
