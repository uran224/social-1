import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="15" />
                <Post message="This is the second post!" likesCount="20" />

            </div>
        </div>
    );
}

export default MyPosts;