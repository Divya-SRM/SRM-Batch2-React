import React,{useEffect,useState} from 'react';
import './Login.css';
export default function Login(props) {
   let isAuth=false;
    const[res,setResult]=useState([]);
    const[user,setUser]=useState([]);
    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>{
        return{
            ...prev,
            [name]:value
        }}) 
        console.log(user);   
    }
    useEffect(()=>{
        fetch("http://localhost:4002/login").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        res.map((x)=>{
            if(user.username===x.username && user.password===x.password)
           {
               alert("Login Successfully");
               console.log("=============Submitted");
               
               isAuth=true;
               console.log(isAuth);
           }   
       
           else{
               alert("INVALID USER OR PASSWORD")
               isAuth=false;
           }
       })
       props.onUserAdd(isAuth);
    }
    return (
        <div className="login">
            <div className="login-triangle"></div>

            <h2 class="login-header">Log in</h2>

            <form class="login-container">
                <p><input type="username" placeholder="Email" name="username" value={user.username} onChange={handleOnChange}/></p>
                <p><input type="password" placeholder="Password" name="password" value={user.password} onChange={handleOnChange}/></p>
                <p><input type="submit" value="Log in" onClick={handleSubmit}/></p>
             </form>
</div>

)}