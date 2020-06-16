import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </div>
            <div className={s.descriptionBlock} >
                <img src={props.profile.photos.small} />
                <div>name: {props.profile.fullName}</div>
                <div>id: {props.profile.userId}</div>

                
            </div>
        </div>
    );
}


export default ProfileInfo;