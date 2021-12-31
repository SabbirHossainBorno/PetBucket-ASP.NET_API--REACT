
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import AdminHeader from './AdminHeader';
const ProfitDetails = () => {
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
