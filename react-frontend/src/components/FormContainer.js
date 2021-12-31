import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {ToastContainer,toast,Zoom} from 'react-toastify';

const FormContainer = (props) => {
    var title= props.title.trim();
    console.log(title);
    const [msg,setMsg]=useState();
    const history = useHistory();
    const [userData, setUserData] = useState({
      name: '',
      email: '',
      password: '',
      address: '',
      nid: '',
      phone: ''
      
  });
     
    // setting the state of the form
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUserData({  ...userData,[name]: [value]})
      console.log(name, value);
      
  }
  const register =  (e) => {
    //send the request to the server to book the service.
    e.preventDefault();
    const name = userData.name.toString();
    const phone = userData.phone.toString();
    const address = userData.address.toString();
    const email = userData.email.toString();
    const nid = userData.nid.toString();
    const password =userData.password.toString();
    const confirmpassword = userData.confirmpassword.toString();

     //add customer function
     const addCustomer = async () => {
        const res = await axios.post('https://localhost:44398/api/CustomerService/AddCustomer',
        {name:name, phone: phone, address: address,
        email: email,nid: nid, 
        password: password});
        if(res.status === 200){
            toast.success("New Customer Added Successful");
            
            
            setUserData({ 
              name: '',
              email: '',
              password: '',
              address: '',
              nid: '',
              phone: '' })
        }if(res.status === 204){
          toast.success("New Customer Added Successful");
        //   setMsg("hi");
          
          setUserData({ 
            name: '',
            email: '',
            password: '',
            address: '',
            nid: '',
            phone: '' })
            setTimeout(() => { history.push('/AdminDashboard'); }, 2000);
      }
        else{
            toast.error("An error occured to while adding a new customer");
        }
}

//add petsitter function
const addPetsitter = async () => {
    const res = await axios.post('https://localhost:44398/api/PetSitterService/AddPetSitter',
    {name:name, phone: phone, address: address,
    email: email,nid: nid, 
    password: password});
    if(res.status === 200){
        toast.success("New Pet Sitter Added Successful");
        
        
        setUserData({ 
          name: '',
          email: '',
          password: '',
          address: '',
          nid: '',
          phone: '' })
    }if(res.status === 204){
      toast.success("New Pet Sitter Added Successful");
    //   setMsg("hi");
      
      setUserData({ 
        name: '',
        email: '',
        password: '',
        address: '',
        nid: '',
        phone: '' })
        setTimeout(() => { history.push('/AdminDashboard'); }, 2000);
  }
    else{
        toast.error("An error occured to while adiing a new pet sitter");
    }
}

//add agency function
const addAgency = async () => {
    const res = await axios.post('https://localhost:44398/api/AgencyService/AddAgency',
    {name:name, phone: phone, address: address,
    email: email,nid: nid, 
    password: password});
    if(res.status === 200){
        toast.success("New Agency Added Successful");
        
        
        setUserData({ 
            name: '',
            email: '',
            password: '',
            address: '',
            nid: '',
            phone: '' })
    }if(res.status === 204){
        toast.success("New Agency Added Successful");
    //   setMsg("hi");
        
        setUserData({ 
        name: '',
        email: '',
        password: '',
        address: '',
        nid: '',
        phone: '' })
        setTimeout(() => { history.push('/AdminDashboard'); }, 2000);
    }
    else{
        toast.error("An error occured to while adding a new agency");
    }
}


        if (props.title == "Add Customer"){
        addCustomer();
        
        }
        if (props.title == "Add Pet Sitter"){
        addPetsitter();

        }
        if (props.title == "Add Agency"){
        addAgency();      
        }



   

    }
    
    return (
        <>
        <ToastContainer/>
             <div class="reg-container">
        <div class="title">{props.title}</div>
        <p>{msg}</p>
        <div class="content">
            <form onSubmit={register}>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Full Name</span>
                        <input name="name" type="text" placeholder="Enter your Name" onChange={handleInputChange} required/>
                    </div>
                    {/* <div class="input-box">
                            <span class="details">Username</span>
                            <input name="name" type="text" placeholder="Enter your username" required>
                        </div> */}
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input name="email" type="text" placeholder="Enter your email"onChange={handleInputChange} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input name="phone" type="text" placeholder="Enter your number" onChange={handleInputChange}required/>
                    </div>

                    <div class="input-box">
                        <span class="details">NID Number</span>
                        <input name="nid" type="text" placeholder="Enter your NID number"onChange={handleInputChange} required/>
                    </div>

                    <div class="input-box">
                        <span class="details">Address</span>
                        <input name="address" type="text" placeholder="Enter your address"onChange={handleInputChange} required/>
                    </div>

                    <div class="input-box">
                        <span class="details">Password</span>
                        <input name="password" type="text" placeholder="Enter your password"onChange={handleInputChange} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input name="confirmpassword" type="text" placeholder="Confirm your password"onChange={handleInputChange} required/>
                    </div>
                </div>
                
               
                <div class="button">
                    <input type="submit" value={props.buttonName}/>
                </div>
                </form>
        </div>

        {/* <!-- Success Alert --> */}
        <div class="text-success" style={{"align-content":"center"}}>
        </div>
        <div class="text-danger" style={{"align-content":"center"}}>
        </div>
    </div>   
        </>
    )
}

export default FormContainer
