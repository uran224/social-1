import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>

            <div>
                <img src='https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </div>

            <div>
                <img className={s.ava} src='https://www.marieclaire.com.au/media/43934/maya-angelou.jpg?width=720&center=0.0,0.0' />
                Description
            </div>

            <MyPosts />

        </div>
    );
}

export default Profile;