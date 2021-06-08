import React from 'react'
import "./Sidebar.css"
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://vignette.wikia.nocookie.net/joke-battles/images/4/40/18360-doge-doge-simple.jpg/revision/latest?cb=20151209161638"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar