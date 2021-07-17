import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Dashboard.css'
export default function Dashboard(){
    const[res,setResult]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4001/student").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    },[])
    return(
        <div>
             <h1>Dashboard</h1>
             <div className="container ">
            <div className="col-sm-10">
            <div className="card"> 
            <div className="card-header"><h4 >Total Students</h4></div>
            <div className="card-body"> 
            <h3>{res.length}</h3>
            </div></div></div></div>
           
        </div>
    )
};