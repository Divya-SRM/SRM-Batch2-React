import React,{useState,useEffect} from "react";
export default function Register(){
    const stuInformation = {
        name:'',
        dob:'',
        email:'',
        city: -1
      };
      const [formvalues, setFormValues] = useState(stuInformation);
      const [cities,setCities] = useState([]);
      const [res,setResult]=useState(0);
      const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => {
          return {
            ...prev,
            [name] : value,
          };
        });
      };
      
      const handleDoSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");  
        alert("submitted");
        console.log(formvalues);

        const reqOptios = {
            method:"POST",
            headers : {
              "Content-Type":"application/json"   
            },
            body: JSON.stringify(formvalues)
          };
      
          fetch("http://localhost:4001/student",reqOptios).then(res => res.json()).then(data=>{
            console.log("saved");
            console.log(data.id);
            
          }).catch(e=>{
            console.error("ERR in save data");
            console.error(e);
          }).finally(()=>{
            console.log("I am in finally");
          })
      };
      useEffect(()=>{
        console.log("Executed after render method=======");
        fetch("http://localhost:4000/cities").then(res => res.json()).then(data=>{
          console.log(data);
          setCities(data);
        }).catch(e=>{
          console.error("error in city values");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
    
      },[])
    
    return(
        <div className="container">
        <title>Student Registeration</title>
       <form> 
      
      <table className="jumbotron" >
      <tr><td><label>Name</label></td>
     <td><input type="text" name="name" value={formvalues.name} onChange={handleOnChange}/></td> 
      </tr>
      <tr >
      <td><label>Date of Birth</label></td>
     <td> <input type="text" name="dob" value={formvalues.dob} onChange={handleOnChange}/></td>
     </tr>
      <tr >
      <td><label>Email Id</label></td>
      <td>
      <input type="text" name="email" value={formvalues.email} onChange={handleOnChange}/>
      </td>
      </tr>
        <tr>
          <td><label>Country</label></td>
            <td>
            <select name="city" onChange={handleOnChange} value={formvalues.city}>
              <option value="-1">Please select a country</option>
              {cities.map((x) => {
                return <option key={x.id} value={x.name} name={x.name}>{x.name}</option>;
              })}
            </select>
            </td>
            </tr>
            <tr>
           <input  type="submit" onClick={handleDoSubmit} value="Submit"/>
           </tr> 
           </table>
          
            </form>
            </div>
    )
}