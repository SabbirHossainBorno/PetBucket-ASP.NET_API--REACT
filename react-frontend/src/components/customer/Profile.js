  // core components
  import CustomerSidebar from "../layouts/sidebar/CustomerSidebar.js";
  import FormContainer from "../FormContainer.js";
  import React, { useEffect, useState } from "react";
  
  const Profile = (props) => {
    var userID=1;
  //const [userData, setUserData] = useState(null);
  const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch(`https://localhost:44398/api/CustomerService/Customer/${userID}`).then(
            (response) => {
                response.json().then((result) => {
                  setUserData(result);
                });
            }
        );
    }, [userID]);
  //const response =  fetch(`https://localhost:44398/api/CustomerService/Customer/${userID}`);
  //const data =  response.json();
  //setUserData(data);
  //console.log(response);

    return (
      <>
        <CustomerSidebar/> 
        <div class="content-container">

        <div class="container-fluid">
            <div class="centerdiv">
            <FormContainer 
              title={props.title}
              buttonName={props.buttonName}
              userData={userData} 
            />
                </div>
            </div>
        </div>

        
      </>
    );
  };
  
  export default Profile;
  