import React,{useState} from 'react';
export default function StudentRegisteration(){
    const name={
        email:' ',
        lname:''
    }
    const[formValues,setFormValues]=useState(name);
    const handleDoSubmit=(e)=>{ 
        e.preventDefault();
        alert("Submitted");
    }
    const handleOnChange=(e)=>{
const{name,value}=e.target.value;
        setFormValues((prev)=>{
            return{ ...prev,
                [name]:value
            }
        });
        //console.log(" "+form.fname);
    }
    return(
        <div>
<form onSubmit={handleDoSubmit} noValidate>
    <div>
        <label>Username</label>
        <input type="text" value={setFormValues.email} name="email" onChange={handleOnChange}/>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>
        </div>
    )
}