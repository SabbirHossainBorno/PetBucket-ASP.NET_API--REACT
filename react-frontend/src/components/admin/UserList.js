import React from 'react'
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import UserListTable from "../UserListTable";
import AdminHeader from './AdminHeader';

const UserList = (props) => {
    
    return (
        <>
            <AdminSidebar/>
            <div class="content-container">

        <div class="container-fluid">

            <div class="grey-bg container-fluid">
                <AdminHeader/>
                <UserListTable 
                title={props.title}
                DetailsLink={props.DetailsLink}
                EditLink={props.EditLink}
                DeleteLink={props.DeleteLink}
            />
            </div>
        </div>
    </div>
        </>
    )
}

export default UserList
