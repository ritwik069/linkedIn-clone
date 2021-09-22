import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions'
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from './Firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './app/usersSlice';
import FlipMove from 'react-flip-move';
function Feed() {
    const user = useSelector(selectUser);

    const [inputState, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc')
            .onSnapshot(
                (snapshot) => setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )

            );
    }, []);
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add(
            {
                name: user.displayName,
                description: user.email,
                message: inputState,
                photoUrl: user.photoUrl || '',
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        )
        setInput('');

    };
    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form action="">
                        <input onChange={(e) => setInput(e.target.value)} value={inputState} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOptions Icon={WallpaperIcon} title='Photo' color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title='video' color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color="#7FC15E" />
                </div>
            </div>

                {posts.map(({ id, data: { name, message, description, photoUrl } }) => (
         
                    <Post
                        key={id}
                        name={name}
                        message={message}
                        description={description}
                        photoUrl={photoUrl}
                    />
         
                ))}

            <Post name='Ritwikop' description='This is a test' message='wow op' />

        </div>
    )
}

export default Feed
