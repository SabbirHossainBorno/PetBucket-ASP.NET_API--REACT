import React, { useEffect, useState } from "react";

const AgencyTable = () => {
    const [agencySearch, setAgencySearch] = useState('');
    const [agencyList, setAgencyList] = useState([]);
    useEffect(() => {
        fetch(`https://localhost:44398/api/AgencyService/AllAgency`).then(
            (response) => {
                response.json().then((result) => {
                    setAgencyList(result);
                });
            }
        );
    }, []);
    return (
        <>
         <div class="col-xl-6 col-md-12">
                <div class="card overflow-hidden">
                    <div class="card-content">
                        <div class="card-body cleartfix">
                            <h4 style={{"text-align":"center"}}>New Agency</h4>
                            <hr />
                            <div class="media align-items-stretch">
                                <div class="table100 ver1">
                                    <div class="table100-nextcols">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th class="cell100 column1">ID</th>
                                                    <th class="cell100 column2">Name</th>
                                                    <th class="cell100 column3">Email</th>
                                                    <th class="cell100 column4">Phone Number</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {agencyList.filter((val) => {
                                                if (agencySearch === "") {
                                                    return val
                                                }
                                                    else if (val.name.toLowerCase().includes(agencySearch.toLowerCase()))
                                                    {
                                                        return val
                                                    }else if (val.phone.includes(agencySearch))
                                                    {
                                                        return val
                                                    }
                                                    
                                                    }).map((u,id) => {
                                                    return (
                                                    <tr>
                                                        <td class="cell100 column1">{u.id}</td>
                                                        <td class="cell100 column2">{u.name}</td>
                                                        <td class="cell100 column3">{u.email}</td>
                                                        <td class="cell100 column4">{u.phone}</td>
                                                    </tr>
                                                  );                     
                                                })
                                    }         
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default AgencyTable
