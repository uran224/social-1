import React from 'react';
import s from './Profile.module.css';

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
            <div>
                My posts
            <div>
                New post
            </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                    <div>
                        post 3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;