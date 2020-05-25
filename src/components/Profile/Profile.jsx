import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo  />
            <MyPosts posts={props.state.posts} />

        </div>
    );
}

export default Profile;
