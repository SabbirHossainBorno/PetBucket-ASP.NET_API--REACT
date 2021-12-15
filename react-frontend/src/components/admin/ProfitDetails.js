import React from 'react'
import AdminSidebar from '../layouts/sidebar/AdminSidebar'

const ProfitDetails = () => {
    return (
        <>
            <AdminSidebar/>
            <div class="content-container">

        <div class="container-fluid">

            <div class="grey-bg container-fluid">
                <section id="minimal-statistics">
                    <div class="row">

                        <div class="col-12 mt-3 mb-1">
                            <h4 class="text-uppercase">Pet Bucket</h4>
                            <p>Profit Details</p>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="align-self-center">
                                                <i class="icon-graph success font-large-2 float-left"></i>
                                            </div>
                                            <div class="media-body text-right">
                                                <h3>
                                                    {/* @foreach (var item in Model.petbucket_admin)
                                                    {
                                                        @item.profit
                                                    } */}
                                                </h3>
                                                <span>Total Profit</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="success">@ViewBag.Tcount</h3>
                                                <span>Total Clients</span>
                                            </div>
                                            <div class="align-self-center">
                                                <i class="icon-user success font-large-2 float-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="success">@ViewBag.Ccount</h3>
                                                <span>Total Customer</span>
                                            </div>
                                            <div class="align-self-center">
                                                <i class="icon-user success font-large-2 float-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="success">@ViewBag.Pcount</h3>
                                                <span>Total Pet Sitter</span>
                                            </div>
                                            <div class="align-self-center">
                                                <i class="icon-user success font-large-2 float-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="success">@ViewBag.Acount</h3>
                                                <span>Total Agency</span>
                                            </div>
                                            <div class="align-self-center">
                                                <i class="icon-user success font-large-2 float-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="align-self-center">
                                                <i class="icon-speech warning font-large-2 float-left"></i>
                                            </div>
                                            <div class="media-body text-right">
                                                <h3>@ViewBag.TRcount</h3>
                                                <span>Total Request</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="align-self-center">
                                                <i class="icon-speech warning font-large-2 float-left"></i>
                                            </div>
                                            <div class="media-body text-right">
                                                <h3>156</h3>
                                                <span>Total Complete Request</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="align-self-center">
                                                <i class="icon-speech warning font-large-2 float-left"></i>
                                            </div>
                                            <div class="media-body text-right">
                                                <h3>@ViewBag.Rcount</h3>
                                                <span>Total Pending Request</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="align-self-center">
                                                <i class="icon-speech warning font-large-2 float-left"></i>
                                            </div>
                                            <div class="media-body text-right">
                                                <h3>23</h3>
                                                <span>Total Cancel Request</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="success">44.89 %</h3>
                                                <span>Profit Rate</span>
                                            </div>
                                            <div class="align-self-center">
                                                <i class="icon-graph success font-large-2 float-left"></i>
                                            </div>
                                        </div>
                                        <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "60%", "aria-valuenow": "60", "aria-valuemin": "0", "aria-valuemax": "100"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="primary">80%</h3>
                                                <span>New Customer Joining Rate</span>
                                            </div>
                                            <div class="align-self-center">
                                                <i class="icon-user success font-large-2 float-right"></i>
                                            </div>
                                        </div>
                                        <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "80%", "aria-valuenow": "80", "aria-valuemin": "0", "aria-valuemax": "100"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="warning">37%</h3>
                                                <span>New Pet Sitter Joining Rate</span>
                                            </div>
                                            <div class="align-self-center">
                                                <i class="icon-user success font-large-2 float-right"></i>
                                            </div>
                                        </div>
                                        <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "35%", "aria-valuenow": "35", "aria-valuemin": "0", "aria-valuemax": "100"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="danger">40%</h3>
                                                <span>New Agency Joining Rate</span>
                                            </div>
                                            <div class="align-self-center">
                                                <i class="icon-user success font-large-2 float-right"></i>
                                            </div>
                                        </div>
                                        <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "40%", "aria-valuenow": "40", "aria-valuemin": "0", "aria-valuemax": "100"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="stats-subtitle">
                    <div class="row">
                        <div class="col-12 mt-3 mb-1">
                            <h4 class="text-uppercase">All Transactions Details</h4>
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
                                    Date
                                </th>
                                <th>
                                    Phone No
                                </th>
                                <th>
                                    Paid Amount
                                </th>
                                <th>
                                    Given Amount
                                </th>
                                <th>
                                    Other Cost
                                </th> 
                                <th>
                                    Total Cost
                                </th>
                                <th>
                                    Profit
                                </th>
                            </tr>

                                <tr>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
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

export default ProfitDetails
