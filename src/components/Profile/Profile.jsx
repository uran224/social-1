import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>

            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' />
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