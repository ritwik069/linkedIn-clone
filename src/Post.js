import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({ name, description, photoUrl, message }) {
    return (
        <div className='post'>
            <div className="post_header">
                <Avatar src={photoUrl}>{description[0]}</Avatar>
                <div className="post_info">
                    <h2>
                        {name}
                    </h2>
                    <p>{description}</p>


                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>

            </div>
            <div className="post_button">
                <InputOptions Icon={ThumbUpIcon} title='Like' color='gray'/>
                <InputOptions Icon={ChatIcon} title='Comment' color='gray'/>
                <InputOptions Icon={ShareIcon} title='Share' color='gray'/>
                <InputOptions Icon={SendIcon} title='Send' color='gray'/>
            </div>


        </div>
    )
}

export default Post
