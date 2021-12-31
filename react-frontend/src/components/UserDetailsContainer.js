import React, { useEffect, useState } from "react";

const UserDetailsContainer = (props) => {
    var userID=1;
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
                            {/* <td class="danger"> @Html.DisplayFor(model => model.name)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">Email</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.email)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">Address</td>
                            <td className='danger' >{userData.address}</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.address)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">Phone Number</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.phone)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">NID Number</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.nid)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">Current Balance</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.balance)</td> */}
                        </tr>
                    </table>
                </div>
            </section>
        </>
    )
}

export default UserDetailsContainer
