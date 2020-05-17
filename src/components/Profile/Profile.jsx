import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>

            <div>
                <img src='https://www.markgray.com.au/images/gallery/large/wanaka-tree.jpg' />
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