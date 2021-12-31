import React, { useEffect, useState } from "react";
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import FormContainer from "../FormContainer.js";
import axios from 'axios';

import { useParams } from "react-router-dom";
import {ToastContainer,toast,Zoom} from 'react-toastify';

const CustomerEdit = (props) => {
        const params= useParams();
        var userID=params.id;
      const [userData, setUserData] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        nid: '',
        password: '',
        
    });
    
    useEffect(() => {
        fetch(`https://localhost:44398/api/CustomerService/Customer/${userID}`).then(
            (response) => {
                response.json().then((result) => {
                  setUserData({ 
                    name: result.name.trim(),
                    phone:  result.phone.trim(),
                    address:  result.address.trim(),
                    email:  result.email.trim(),
                    nid:  result.nid.trim(),
                    password:  result.password.trim(),
                   })
                  
                  
                });
            }
        );
    }, [userID]);
    
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUserData({  ...userData,[name]: [value]})
      console.log(name, value);
      
    }
    console.log(userData);
    const editProfile = async (e) => {
        e.preventDefault();
        const phone = userData.phone.toString();
        const address = userData.address.toString();
        const name = userData.name.toString();
        const email = userData.email.toString();
        const nid = userData.nid.toString();
        const res = await axios.put('https://localhost:44398/api/CustomerService/EditCustomer',
          {id:userID,name:name, phone: phone, address: address,
            email: email, nid: nid, password:userData.password});
          if(res.status === 200){
            toast.success("Customer Edit Successful");
              
          }if(res.status === 204){
            toast.success("Customer Edit Successful");
            // setUserData({ 
            //     name: '',
            //     email: '',
            //     password: '',
            //     address: '',
            //     nid: '',
            //     phone: '' })
            // setTimeout(() => { history.push('/AdminDashboard'); }, 2000);
        }
          else{
            toast.error("An error occured to while editing a customer");
          }
        // console.log(res.status);
      };
    
    
    
    return (
        <>
            <AdminSidebar/>
            <div class="content-container">
    <div class="container-fluid">
        <div class="grey-bg container-fluid">
            <section id="stats-subtitle">
                <div class="row">
                    <div class="col-12 mt-3 mb-1">

                    </div>
                </div>
                <div class="centerdiv">
                <div class="reg-container">
                <ToastContainer/>
                <div class="reg-container">
        <div class="title">{props.title}</div>
    
        <div class="content">
            <form onSubmit={editProfile}>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Full Name</span>
                        <input name="name" type="text" placeholder="Enter your Name" onChange={handleInputChange} defaultValue={userData.name}required/>
                    </div>
                    {/* <div class="input-box">
                            <span class="details">Username</span>
                            <input name="name" type="text" placeholder="Enter your username" required>
                        </div> */}
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input name="email" type="text" placeholder="Enter your email"onChange={handleInputChange}defaultValue={userData.email} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input name="phone" type="text" placeholder="Enter your number" onChange={handleInputChange}defaultValue={userData.phone}required/>
                    </div>

                    <div class="input-box">
                        <span class="details">NID Number</span>
                        <input name="nid" type="text" placeholder="Enter your NID number"onChange={handleInputChange} defaultValue={userData.nid}required/>
                    </div>

                    <div class="input-box">
                        <span class="details">Address</span>
                        <input name="address" type="text" placeholder="Enter your address"onChange={handleInputChange} defaultValue={userData.address}required/>
                    </div>

                    <div class="input-box">
                        <span class="details">Password</span>
                        <input name="password" type="text" placeholder="Enter your password"onChange={handleInputChange} defaultValue={userData.password}required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input name="confirmpassword" type="text" placeholder="Confirm your password" required/>
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
                        <div>
                            <a href="/AdminDetails"><h4 class="warning">Back To Profile</h4></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
        </>
    )
}

export default CustomerEdit
