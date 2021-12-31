import React, { useEffect, useState } from "react";

const UserListTable = (props) => {
    const [psSearch, setPsSearch] = useState('');
    const [psList, setPsList] = useState([]);

    const Customer = () => {
        fetch(`https://localhost:44398/api/CustomerService/AllCustomers`).then(
            (response) => {
                response.json().then((result) => {
                    setPsList(result);
                });
            }
        );
        
    }
    const PetSitter = () => {
        fetch(`https://localhost:44398/api/PetSitterService/AllPetSitter`).then(
            (response) => {
                response.json().then((result) => {
                    setPsList(result);
                });
            }
        );
        
    }
    const Agency = () => {
        fetch(`https://localhost:44398/api/AgencyService/AllAgency`).then(
            (response) => {
                response.json().then((result) => {
                    setPsList(result);
                });
            }
        );
        
    }
    if (props.title=="All Customer Details")
    {
        useEffect(() => {
            Customer();setPsList([]);
        },[])
    }if(props.title=="All Pet Sitter Details"){
        useEffect(() => {
            PetSitter();setPsList([]);
        },[])

    }if(props.title=="All Agency Details"){
        useEffect(() => {
            Agency();setPsList([]);
        },[])

    } 
    return (
        <>
<section id="stats-subtitle">
                    <div class="row">
                        <div class="col-12 mt-3 mb-1">
                            <h4 class="text-uppercase">{props.title}</h4>
                        </div>
                    </div>

                    <div class="row">
                        <table class="table">
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Address
                                </th>
                                <th>
                                    NID NO.
                                </th>
                                <th>
                                    Phone NO.
                                </th>
                                <th>
                                    Option
                                </th>
                                <th></th>
                            </tr>

                            {psList.filter((val) => {
                                                if (psSearch === "") {
                                                    return val
                                                }
                                                    else if (val.name.toLowerCase().includes(psSearch.toLowerCase()))
                                                    {
                                                        return val
                                                    }else if (val.phone.includes(psSearch))
                                                    {
                                                        return val
                                                    }
                                                    
                                                    }).map((u,id) => {
                                                        return (
                                                            <tr>
                                                            <td class="cell100 column3">{u.id}</td>
                                                            <td class="cell100 column2">{u.name}</td>
                                                            <td class="cell100 column3">{u.email}</td>
                                                            <td class="cell100 column4">{u.address}</td>
                                                            <td class="cell100 column4">{u.nid}</td>
                                                            <td class="cell100 column4">{u.phone}</td>
                                                            <td>
                                                            <a href={props.EditLink+`/${u.id}`}>EDIT</a>|
                                                            <a href={props.DetailsLink+`/${u.id}`}>DETAILS</a>|
                                                            <a href={props.DeleteLink+`/${u.id}`}>DELETE</a>
                                    </td>

                                                        </tr> 
                                                      );                     
                                                    })
                                        } 

                        </table>
                    </div>
                </section>
        </>
    )
}

export default UserListTable
