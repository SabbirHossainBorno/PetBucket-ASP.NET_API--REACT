import React, { useEffect, useState } from "react";
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import AdminHeader from './AdminHeader';

const AdminDetails = () => {
    const [adminList, setAdminList] = useState([]);
    useEffect(() => {
        fetch(`https://localhost:44398/api/AdminService/AllAdmin`).then(
            (response) => {
                response.json().then((result) => {
                    setAdminList(result);
                });
            }
        );
    }, []);
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
                        <h4 class="text-uppercase">Admin Profile</h4>
                        {/* <h4 class="primary">@Html.DisplayFor(model => model.name)</h4> */}
                    </div>
                </div>
                <div>
                    <hr />
                    <br/>
                    
                    <table>
                        <td>

                            <tr class="text-uppercase"><h5 class="primary">Name</h5></tr>
                            <tr class="text-uppercase"><h5 class="primary">Email</h5></tr>
                            <tr class="text-uppercase"><h5 class="primary">Address</h5></tr>
                            <tr class="text-uppercase"><h5 class="primary">Phone Number</h5></tr>
                            <tr class="text-uppercase"><h5 class="primary">NID Number</h5></tr>
                            <tr class="text-uppercase"><h5 class="primary">Current Profit</h5></tr>
                            
                        </td>
                        {adminList.filter((val) => {
                                                return val    
                                                    }).map((u) => {
                                                        return (
                                                            <td>
                                                                <tr class="text-uppercase"><h5 class="danger">{u.name}</h5></tr>
                                                                <tr class="text-uppercase"><h5 class="danger">{u.email}</h5></tr>
                                                                <tr class="text-uppercase"><h5 class="danger">{u.address}</h5></tr>
                                                                <tr class="text-uppercase"><h5 class="danger">{u.phone}</h5></tr>
                                                                <tr class="text-uppercase"><h5 class="danger">{u.nid}</h5></tr>
                                                                <tr class="text-uppercase"><h5 class="danger">{u.profit}</h5></tr>
                                                            </td>
                                                      );                     
                                                    })
                                        }
                        
                        <tr>     
                            <td>
                            <a href="/AdminProfileEdit">
                                <div class="button">
                                <input type="submit" value="Edit Profile"/>
                                </div>
                            </a>                   
                            </td>
                        </tr>
                        {/* <tr>
                            <td class="text-uppercase"><h5 class="primary">Name</h5></td>
                            <td class="text-uppercase"><h5 class="danger">Name</h5></td>
                        </tr>
                        <tr>
                        <td class="text-uppercase"><h5 class="primary">Email</h5></td>
                        <td class="text-uppercase"><h5 class="danger">Email</h5></td>
                        </tr>
                        <tr>
                        <td class="text-uppercase"><h5 class="primary">Address</h5></td>
                        <td class="text-uppercase"><h5 class="danger">Address</h5></td>
                        </tr>
                        <tr>
                        <td class="text-uppercase"><h5 class="primary">Phone Number</h5></td>
                        <td class="text-uppercase"><h5 class="danger">Phone Number</h5></td>
                        </tr>
                        <tr>
                        <td class="text-uppercase"><h5 class="primary">NID Number</h5></td>
                        <td class="text-uppercase"><h5 class="danger">NID Number</h5></td>
                        </tr>
                        <tr>
                        <td class="text-uppercase"><h5 class="primary">Current Profit</h5></td>
                        <td class="text-uppercase"><h5 class="danger">Current Profit</h5></td>
                        </tr>
                        <tr>     
                            <td>
                            <a href="/AdminProfileEdit">
                                <div class="button">
                                <input type="submit" value="Edit Profile"/>
                                </div>
                            </a>                   
                            </td>
                        </tr> */}

                    </table>
                </div>
            </section>
        </div>
    </div>
</div>
        </>
    )
}

export default AdminDetails
