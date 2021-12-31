import React, { useEffect, useState } from "react";
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import UserDetailsContainer from '../UserDetailsContainer';
import AdminHeader from './AdminHeader';
import { useParams } from "react-router-dom";

const CustomerDetails = (props) => {
    const params = useParams();
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
    return (
        <>
            <AdminSidebar/>
            <div class="content-container">

    <div class="container-fluid">

        <div class="grey-bg container-fluid">
            <AdminHeader/>

            <section id="stats-subtitle">
                <div class="row">
                    <div class="col-12 mt-3 mb-1">
                        <h4 class="text-uppercase">{props.title}</h4>
                        {/* <h4 class="primary">@Html.DisplayFor(model => model.name)</h4> */}
                        <a href={props.link}><h4 class="warning">Back To List</h4></a>
                    </div>
                </div>
                <div>
                    <hr />
                    <table>
                        <tr>
                            <td class="primary">Name</td>
                            <td className='danger' >{userData.name}</td>
                        </tr>
                        <tr>
                            <td class="primary">Email</td>
                            <td className='danger' >{userData.email}</td>
                        </tr>
                        <tr>
                            <td class="primary">Address</td>
                            <td className='danger' >{userData.address}</td>                           
                        </tr>
                        <tr>
                            <td class="primary">Phone Number</td>
                            <td className='danger' >{userData.phone}</td>
                        </tr>
                        <tr>
                            <td class="primary">NID Number</td>
                            <td className='danger' >{userData.nid}</td>
                        </tr>
                    </table>
                </div>
            </section>
        </div>
    </div>
</div>
        </>
    )
}

export default CustomerDetails
