import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './app/usersSlice';
import { auth } from './Firebase';


function Header() {
    const dispatch=useDispatch();
    const LogoutToApp=()=>{
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOptions Icon={HomeIcon}  title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messaging"/>
                <HeaderOptions Icon={NotificationsIcon} title="Notification"/>
                <HeaderOptions avatar="https://pbs.twimg.com/profile_images/1306879779434647556/HZLttZjp_400x400.jpg"
                 title="Logout" 
                 onClick={LogoutToApp}
                 />
            </div>
    
        </div>
    )
}

export default Header
