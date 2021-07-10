import React,{useState,useEffect} from 'react';
export default function Display(){
    const[res,setResult]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/studentdata").then(res => res.json()).then(data=>{
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
          
         <table border="2px">  
           <tr> <td><h4>Student Id</h4></td>
           <td><h4>First Name</h4></td>
           <td><h4>Last Name</h4></td>
           <td><h4>Email Id</h4></td>
           <td><h4>Gender</h4></td>
           <td><h4>Country</h4></td></tr>
              {res.map((x) => {
                return <tr><td>{x.student_id}</td>
                <td>{x.first_name}</td>
                <td>{x.last_name}</td>
                <td>{x.email}</td>
                <td>{x.gender}</td>
                <td>{x.country}</td>
                </tr>
              })}
              
              
            </table>
            
        </div>
    )
}