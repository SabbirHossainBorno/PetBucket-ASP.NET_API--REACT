
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import AdminHeader from './AdminHeader';
import React, { useEffect, useState } from "react";
import CustomerTable from "./NewCustomer";
import ReqTable from "./RecentReqTable";
import AgencyTable from "./AgencyTable";
import PSTable from "./PetSitter";

const Dashboard = () => {
    
    return (
        <>
        <AdminSidebar/>  
        <div class="content-container">

<div class="container-fluid">

    <div class="grey-bg container-fluid">
        
    <AdminHeader/> 
    {/* ReqTable */}
       <ReqTable/>

        <section id="stats-subtitle">
            <div class="row">
                <div class="col-12 mt-3 mb-1">
                    <h4 class="text-uppercase">User Information</h4>
                </div>
            </div>
            <div class="row">
                {/* Customer table */}
               <CustomerTable/>
                {/* PetSitter table */}
               <PSTable/>
            </div>
                <div class="row">
                    {/*Agency */}
                    <AgencyTable/>
                </div>
            

        </section>
    </div>
</div>
</div>
            
        </>
    )
}

export default Dashboard
