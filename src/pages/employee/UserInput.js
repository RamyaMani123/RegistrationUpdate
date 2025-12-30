import { useState } from "react";
import Form from "react-bootstrap/Form"
import "./UserInput.css"
import  Button  from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const UserInput=()=>{
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        depatment:""
    });
    const handleInputChange=(event)=>{
        const {name,value}= event.target;
        setFormData({...formData,[name]:value,})
    }
    const navigate=useNavigate();
    const handleSubmit=async (e) =>{
        e.preventDefault();
        // console.log(farmData);
        try{
            const response= await fetch("http://localhost:8080/api/employee",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formData)

            });
            const data=await response.json();
            console.log("data created" ,data);
            navigate("/")
        }
        catch(error){
            console.log("error", error.message)
        }}

        
    
    return(
        <>
<div className="form-wrapper">
    
    <h3>Employee Registration</h3>
    <div>
        <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicName">
        <Form.Control
        type="text"
        name="name"
        placeholder="enter name"
        value={formData.name}
        onChange={handleInputChange}
        />
        </Form.Group>
         <Form.Group controlId="formBasicName">
        <Form.Control
        type="email"
        name="email"
        placeholder="enter email"
        value={formData.email}
        onChange={handleInputChange}
        />
        </Form.Group>
         <Form.Group controlId="formBasicName">
        <Form.Control
        type="text"
        name="phone"
        placeholder="enter phone"
        value={formData.phone}
        onChange={handleInputChange}
        />
        </Form.Group>
         <Form.Group controlId="formBasicName">
        <Form.Control
        type="text"
        name="department"
        placeholder="enter department"
        value={formData.department}
        onChange={handleInputChange}
        />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100" >Post employee</Button>
        </Form>
        </div>
        </div>

</>
    )
}
export default UserInput;