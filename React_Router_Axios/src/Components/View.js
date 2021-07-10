import React,{useState,useEffect} from 'react';
export default function View(){
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
    const handleSearch=()=>{

    }
    return(
        <div>
          
         <table border="2px">  
           <tr> <td><h4>Student Name</h4></td>
           <td><h4>Email Id</h4></td>
           <td><h4>Country</h4></td></tr>
              {res.map((x) => {
                return <tr><td><label key={x.id}>{x.name}</label></td>
                <td><label key={x.id}>{x.email}</label></td>
                <td><label key={x.id}>{x.city}</label></td>
                </tr>
              })}
              
              
            </table>
            
        </div>
    )
}