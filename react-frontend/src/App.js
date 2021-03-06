import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/register.css';
import './App.css'
import './assets/css/Sidebar.css';
import './assets/css/ServiceForm.css';
import './assets/css/Site.css';
import './assets/css/Table.css';



import Register from './components/auth/Register';
import Login from './components/auth/Login';
import LandingPage from './components/LandingPage';
import CustomerDashboard from './components/customer/Dashboard';
import PetService from "./components/customer/PetService";
import Profile from "./components/customer/Profile";

//-------------ADMIN--------------------

import AdminDashboard from "./components/admin/AdminDashboard";
import AddUser from "./components/admin/AddUser";
import AdminDetails from "./components/admin/AdminDetails";
import UserList from "./components/admin/UserList";
import CustomerDetails from "./components/admin/CustomerDetails";
import PetSitterDetails from "./components/admin/PetSitterDetails";
import AgencyDetails from "./components/admin/AgencyDetails";
import CustomerEdit from "./components/admin/CustomerEdit";
import PetSitterEdit from "./components/admin/PetSitterEdit";
import AgencyEdit from "./components/admin/AgencyEdit";
import AdminProfileEdit from "./components/admin/AdminProfileEdit";
import UserDelete from "./components/admin/UserDelete";
import RequestDetails from "./components/admin/RequestDetails";
import ProfitDetails from "./components/admin/ProfitDetails";

//-------------END--------------------

function App() {
  return (
    <> 
    <Router>
    <Switch>
      {/* Public Routes */}
    <Route exact path="/" >
      <LandingPage />
    </Route>  
    <Route
      exact path="/register"
        children=
        {
          <Register
            title="sign up"
            buttonName="register"
          />
        }
    ></Route>

    <Route exact path="/login" >
      <Login />
    </Route>

     {/* Customer Routes */}
    <Route exact path="/CustomerDashboard" >
      <CustomerDashboard />
    </Route>

    <Route
      exact path="/customer/edit-profile"
        children=
        {
          <Profile
            title="Edit Profile"
            buttonName="save"
          />
        }
    ></Route>

  {/* Pet services for customer */}
    <Route exact path="/PetService/DogWalking"
        children=
        {
          <PetService
            serviceName="Dog Walking"
            buttonName="Book Service"
          />
        }
      ></Route>
    <Route exact path="/PetService/PetDayCare"
        children=
        {
          <PetService
            serviceName="Pet Day Care"
            buttonName="Book Service"
          />
        }
      ></Route>
      <Route exact path="/PetService/PetTaxi"
        children=
        {
          <PetService
            serviceName="Pet Taxi"
            buttonName="Book Service"
          />
        }
      ></Route>
      <Route exact path="/PetService/PetSitting"
        children=
        {
          <PetService
            serviceName="Pet Sitting"
            buttonName="Book Service"
          />
        }
      ></Route>
      <Route exact path="/PetService/PetGromming"
        children=
        {
          <PetService
            serviceName="Pet Gromming"
            buttonName="Book Service"
          />
        }
      ></Route>
      <Route exact path="/PetService/PetTraining"
        children=
        {
          <PetService
            serviceName="Pet Training"
            buttonName="Book Service"
          />
        }
      ></Route>
    <Route exact path="/PetService/dog-walking"
            children={
              <PetService
                serviceName="Dog Walking"
                buttonName="Book Service"
              />
            }
          ></Route>



    {/* ----------------------------------ADMIN---------------------------------- */}
    <Route exact path="/AdminDashboard" >
      <AdminDashboard />
    </Route>

    <Route exact path="/RequestDetails" >
      <RequestDetails />
    </Route>

    <Route exact path="/ProfitDetails" >
      <ProfitDetails />
    </Route>

    {/* ADMIN------ADD USER */}
    <Route exact path="/AddCustomer"
    children=
    {
      <AddUser
        title="Add Customer"
        buttonName="Add"
      />
    }
    > 
    </Route>
    <Route exact path="/AddPetSitter"
    children=
    {
      <AddUser
        title="Add Pet Sitter"
        buttonName="Add"
      />
    }
    > 
    </Route>
    <Route exact path="/AddAgency"
    children=
    {
      <AddUser
        title="Add Agency"
        buttonName="Add"
      />
    }
    > 
    </Route>


    {/* ADMIN------USER LIST */}

    <Route exact path="/CustomerList"
    children=
    {
      <UserList

        title="All Customer Details"
        DetailsLink="/CustomerDetails"
        EditLink="/CustomerEdit"
        DeleteLink="/CustomerDelete"
        
      />
    }
    > 
    </Route>
    <Route exact path="/PetSitterList"
    children=
    {
      <UserList
        title="All Pet Sitter Details"
        DetailsLink="/PetSitterDetails"
        EditLink="/PetSitterEdit"
        DeleteLink="/PetSitterDelete"
      />
    }
    > 
    </Route>
    <Route exact path="/AgencyList"
    children=
    {
      <UserList
      header="Agency List"
        title="All Agency Details"
        DetailsLink="/AgencyDetails"
        EditLink="/AgencyEdit"
        DeleteLink="/AgencyDelete"
      />
    }
    > 
    </Route>

    {/* ADMIN------USER DETAILS */}

    <Route exact path="/CustomerDetails/:id"
    children=
    {
      <CustomerDetails
      header="Customer Details"
      link="/CustomerList"
        title="Customer Details"
      />
    }
    > 
    </Route>
    <Route exact path="/PetSitterDetails/:id"
    children=
    {
      <PetSitterDetails
      header="Pet Sitter Details"
      link="/PetSitterList"
        title="Pet Sitter Details"
      />
    }
    > 
    </Route>
    <Route exact path="/AgencyDetails/:id"
    children=
    {
      <AgencyDetails
      header="Agency Details"
      link="/AgencyList"
        title="Agency Details"
      />
    }
    > 
    </Route>
    

    {/* ADMIN------USER EDIT */}

    <Route exact path="/CustomerEdit/:id"
    children=
    {
      <CustomerEdit
      link="/CustomerList"
        title="Customer Edit"
        buttonName="Update"
      />
    }
    > 
    </Route>
    <Route exact path="/PetSitterEdit/:id"
    children=
    {
      <PetSitterEdit
      link="/PetSitterList"
        title="Pet Sitter Edit"
        buttonName="Update"
      />
    }
    > 
    </Route>
    <Route exact path="/AgencyEdit/:id"
    children=
    {
      <AgencyEdit
      link="/AgencyList"
        title="Agency Edit"
        buttonName="Update"
      />
    }
    > 
    </Route>

    {/* ADMIN------USER DELETE */}

    <Route exact path="/CustomerDelete/:id"
    children=
    {
      <UserDelete
      link="/CustomerList"
        title="Customer Delete"
        buttonName="Delete"
      />
    }
    > 
    </Route>
    <Route exact path="/PetSitterDelete/:id"
    children=
    {
      <UserDelete
      link="/PetSitterList"
        title="Pet Sitter Delete"
        buttonName="Delete"
      />
    }
    > 
    </Route>
    <Route exact path="/AgencyDelete/:id"
    children=
    {
      <UserDelete
      link="/AgencyList"
        title="Agency Delete"
        buttonName="Delete"
      />
    }
    > 
    </Route>

    {/* ADMIN------ADMIN DETAILS */}

    <Route exact path="/AdminDetails" >
      <AdminDetails />
    </Route>
    
    {/* ADMIN------ADMIN Profile Edit */}
    <Route exact path="/AdminProfileEdit"
    children=
    {
      <AdminProfileEdit
      // link="/AdminDetails"
        title="Admin Profile Edit"
        buttonName="Update"
      />
    }
    > 
    </Route>
    

    {/* ----------------------ADMIN-END---------------- */}

    </Switch>

    </Router> 


    {/* ----------------------END---------------- */}
    </>
  );
}

export default App;
