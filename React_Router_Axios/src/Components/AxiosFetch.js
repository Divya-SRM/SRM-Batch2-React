import axios from 'axios';
import './Format.css';
import React,{useState,useEffect} from 'react'
export default function Search(){
    const stuInformation = {
        id:'',
        name:''
        
      };
      const [res,setResult]=useState([])
      const [formvalues, setFormValues] = useState(stuInformation);
      const[res1,setResult1]=useState([])
      const[city,setCity]=useState([])
    useEffect(()=>{
        console.log("Executed after render method=======");
        axios.get("http://localhost:4000/cities").then(res => {
          setResult(res.data);
          setFormValues(res.data);
        }).catch(e=>{
          console.error("error in city values");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
          
        })
        
    
      },[])
      const handleSearch=(event)=>{
        console.log(formvalues.name);
          
          const url="http://localhost:4001/student?city="+city;
         // fetch(url).then(res => res.json()).then(data=>{
            axios.get(url).then(res => {
          //console.log(data);
          setResult1(res.data);
          setFormValues(res.data);
        }).catch(e=>{
          console.error("error in city values");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
    
      
      }
      const handleOnChange = (event) => {
          const selectcountry=event.target.value;
          setCity(selectcountry);
          
      };
    return(
        <div>
            <table>
            <select name={formvalues.city} onChange={handleOnChange} value={formvalues.city}>
              <option value="-1">Please select a country</option>
              {res.map((x) => {
                return <option key={x.id} value={x.name} name={x.name}>{x.name}</option>;
              })}
            </select>
            <input type="submit" value="search" onClick={handleSearch}/></table><hr/>
            <table border="2px">
            <tr> <td><h4>Student Name</h4></td>
           <td><h4>Email Id</h4></td>
           <td><h4>Country</h4></td></tr>
              {res1.map((x) => {
                return <tr><td><label key={x.id}>{x.name}</label></td>
                <td><label key={x.id}>{x.email}</label></td>
                <td><label key={x.id}>{x.city}</label></td>
                </tr>
              })}
            </table>

        </div>
    )
}