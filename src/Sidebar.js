import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './app/usersSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItems = (topics)=>{
        return(
            
            <>
        <div className="sidebar_recentItems">
            <span className="sidebar_hashtags">#</span>
            <p>{topics}</p>

        </div>
        </>
            )
    }
 
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
                 alt="" />
                <Avatar src={user.photoUrl} className="sidebar_avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed this</p>
                    <p className="sidebar_statnumber">
                    25000
                    </p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statnumber">
                    25450
                    </p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('nodejs')}
                
            </div>
        </div>
    )
}

export default Sidebar
