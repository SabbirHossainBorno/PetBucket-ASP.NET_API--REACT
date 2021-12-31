import React from 'react'
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import UserDetailsContainer from '../UserDetailsContainer';
import AdminHeader from './AdminHeader';

const UserDetails = (props) => {
    return (
        <>
            <AdminSidebar/>
            <div class="content-container">

    <div class="container-fluid">

        <div class="grey-bg container-fluid">
            <AdminHeader/>

            <UserDetailsContainer 
                title={props.title}
                link={props.link}
            />
        </div>
    </div>
</div>
        </>
    )
}

export default UserDetails
