import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
/* 
    let posts = [
        {id: 1, message:"Hey, how are you getting on, asshole?", likesCount: "100500"},
        {id: 2, message:"This is the second post!", likesCount: "20"},
        {id: 3, message:"Asshole!", likesCount: "10"},
        {id: 4, message:"This is the fdsfdssd", likesCount: "111"}
     
    ]; 
 */
    return (
        <div>
            <ProfileInfo  />
            <MyPosts posts={props.posts} />

        </div>
    );
}

export default Profile;