import  "./UpdateUser.css";
import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import { data, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UpdateUser=()=>{
    const {id} = useParams();
    const navigate=useNavigate();
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

        useEffect(()=>{
            const fetchEmployee=async()=>{
                try{
                const response=await fetch(`http://localhost:8080/api/employee/${id}`);
                const data=await response.json();
                setFormData(data)
                }
                catch(error){
                    console.log("error detected update method", error.message)
                }

            }
            fetchEmployee();
        },[id])
        const handleSubmit=async(e)=>{
            e.preventDefault();
            try{
                const response= await fetch(`http://localhost:8080/api/employee/${id}`,{
                   method:"PATCH",
                  headers: {
                    "Content-Type":"Application/json",

                   } ,
                   body: JSON.stringify(formData),
                })
                const data=await response.json();
console.log("successfully pdated", data);
navigate('/')
            }
                catch(error){
                    console.error("error update user", error.message)

                }
            }
        
    return(
        <>
<div className="form-wrapper">
    
    <h3>Employee Registration update</h3>
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
        <Button variant="primary" type="submit" className="w-100" >edit employee</Button>
        </Form>
        </div>
        </div>

</>
       ) 
    }

export default UpdateUser;