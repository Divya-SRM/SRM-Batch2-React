import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './Registeration.css';


export default function MyNewValidations() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({
        firstname : Yup.string().required("First Name is mandatory"),
        lastname : Yup.string().required("Last Name is mandatory"),
        email : Yup.string().email("Please enter valid email").required("Email should not be empty"),
        address : Yup.string().required("address is mandatory"),
        gender : Yup.string().required("gender is mandatory"),
        mobilenumber : Yup.string().matches(phoneRegExp,"Phone number is invalid")
    }) 

    
    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            email:' ',
            address:'',
            mobilenumber:0,
            gender:''
        },
        validationSchema,
        onSubmit(values) {
            console.log("=============Submitted");
            console.log(values);
            alert("Form submitted")
        }
    }) 

    return (
        
        <div>
            <h1>Student Registeration</h1>
             
            <form  onSubmit={handleSubmit} noValidate>
           
                <div>
                <table align="center" cellpadding = "10">
                    <tr>
                        <td><label>First Name</label></td>
                        <td>
                        <input type="text" name="firstname" onChange={handleChange} values={values.firstname}/>
                        {errors.firstname ? errors.firstname : null}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label>Last Name</label>
                        </td>
                        <td>
                        <input type="text" name="lastname" onChange={handleChange} values={values.lastname}/>
                         {errors.lastname ? errors.lastname : null}
                        </td>
                    </tr>  
                
                    <tr>
                <td>Address<br /><br /><br /></td>
                <td><textarea name="address" rows="10" cols="50" onChange={handleChange} values={values.address}>
                {errors.address ? errors.address : null}
                </textarea>
                </td>
                </tr>
                                <tr>
                <td>Email ID</td>
                <td><input type="email" name="email" maxlength="100" placeholder="yghanendra@gmail.com" onChange={handleChange} values={values.address}/>
                {errors.email ? errors.email : null}</td>
                </tr>
                <tr>
                <td>Mobile Number</td>
                <td>
                <input type="text" name="mobilenumber" maxlength="10" placeholder="7842xxxxxx"onChange={handleChange} values={values.mobilenumber}/>
                {errors.mobilenumber ? errors.mobilenumber : null}</td></tr>
                <tr>
                <td>Gender</td>
                <td>
                <input type="radio" name="gender" value="Male" onChange={handleChange} values={values.gender}/>
                
                Male
                <input type="radio" name="gender" value="Female" onChange={handleChange} values={values.gender} />
                Female
                {errors.gender ? errors.gender : null}
                </td>
                </tr>      
                <tr><td></td><td><button type="submit" >Submit</button></td></tr>
                </table>
                </div>
               
            </form>
        </div>
    )
}