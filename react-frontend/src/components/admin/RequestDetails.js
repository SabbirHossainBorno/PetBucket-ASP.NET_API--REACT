import React, { useEffect, useState } from "react";
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import AdminHeader from './AdminHeader';
const RequestDetails = () => {
    const [reqList, setReqList] = useState([]);
      useEffect(() => {
          fetch(`https://localhost:44398/api/PetService/GetAll`).then(
              (response) => {
                  response.json().then((result) => {
                      setReqList(result);
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
                            <h4 class="text-uppercase">All Request Details</h4>
                        </div>
                    </div>

                    <div class="row">
                        <table class="table">
                            <tr>
                                <th>
                                    Serial No.
                                </th>
                                <th>
                                    Customer ID
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Address
                                </th>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Pet Details
                                </th>
                                <th>
                                    Duration
                                </th>
                                <th>
                                    Phone No
                                </th>
                                <th>
                                    Request Details
                                </th>
                                <th>
                                    Amount
                                </th>
                                <th>
                                    Option
                                </th>
                                <th></th>
                            </tr>
                                {reqList.filter((val) => {                                               
                                                return val
                                            }).map((u,id) => {
                                               
                                                
                                        return (
                                            <tr class="row100 body">
                                                            <td class="cell100 column4">{u.id}</td>
                                                            <td class="cell100 column4">{u.customer_id}</td>
                                                            <td class="cell100 column4">{u.name}</td>
                                                            <td class="cell100 column4">{u.address}</td>
                                                            <td class="cell100 column4">{u.date}</td>
                                                            <td class="cell100 column4">{u.petdetails}</td>
                                                            <td class="cell100 column4">{u.duration}</td>
                                                            <td class="cell100 column4">{u.phone}</td>
                                                            <td class="cell100 column4">{u.requestdetails}</td>
                                                            <td class="cell100 column4">{u.amount}</td>
                                                            <td class="cell100 column5">
                                                                <a href="#">Accept</a>
                                                                <a href="#">Cancel</a>
                                                            </td>
                                                            {/* <select>
                                                            <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="mercedes">Mercedes</option>
                                                            <option value="audi">Audi</option>
                                                            </select> */}
                                            </tr>
                                        
                                            );
                                            
                                            })
                                        }

                        </table>
                    </div>
                </section>
            </div>
        </div>
    </div>
        </>
    )
}

export default RequestDetails
