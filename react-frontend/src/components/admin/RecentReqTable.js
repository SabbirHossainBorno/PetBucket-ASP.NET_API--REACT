import React, { useEffect, useState } from "react";

const RecentReqTable = () => {
    const [search, setSearch] = useState('');
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
         <section id="stats-subtitle">
            
            <div class="row">
            <div class="col-12 mt-3 mb-1">
                    <h4 class="text-uppercase">Request Details</h4>
                </div>
            <div class="card overflow-hidden">
            <div class="card-content">
            <div class="card-body cleartfix">
                
                <h4 style={{"text-align":"center"}}>Recent Request Details</h4>
                <hr />
                <div class="search-box">
                                    <i class="material-icons">&#xE8B6;</i>
                                    <input type="text" class="form-control" placeholder="Search&hellip;" onChange={e => {setSearch(e.target.value)}}/>
                                </div>
            </div>
            <div class="row">
                <div class="table100 ver1">
                    <div class="table100-nextcols">
                        <table>
                            <thead>
                                <tr class="row100 head">
                                    <th class="cell100 column3">Customer ID</th>
                                    <th class="cell100 column2">Name</th>
                                    <th class="cell100 column4">Address</th>
                                    <th class="cell100 column5">Request Date</th>
                                    <th class="cell100 column6">Pet Details</th>
                                    <th class="cell100 column2">Duration</th>
                                    <th class="cell100 column5">Request Details</th>
                                </tr>
                            </thead>
                            <tbody>
                            {reqList.filter((val) => {
                                                if (search === "") {
                                                    return val
                                                }
                                            else if (val.name.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                                
                                            }else if (val.phone.includes(search))
                                            {
                                                return val
                                            }
                                            else if (val.amount.toString().includes(search))
                                            {
                                                return val
                                            }
                                            else if (val.duration.toString().includes(search))
                                            {
                                                return val
                                            }
                                            else if (val.date.toString().includes(search))
                                            {
                                                return val
                                            }else if (val.petdetails.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }
                                            else if (val.requestdetails.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }
                                            else if (val.address.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }


                                            }).map((u,id) => {
                                               
                                                
                                        return (
                                            <tr class="row100 body">
                                                            <td class="cell100 column2">{u.id}</td>
                                                            <td class="cell100 column3">{u.name}</td>
                                                            <td class="cell100 column4">{u.address}</td>
                                                            <td class="cell100 column5">{u.date}</td>
                                                            <td class="cell100 column6">{u.petdetails}</td>
                                                            <td class="cell100 column2">{u.duration}</td>
                                                            <td class="cell100 column5">{u.requestdetails}</td>
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
        </section>
            
        </>
    )
}

export default RecentReqTable
