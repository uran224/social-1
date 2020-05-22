import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </div>
            <div className={s.descriptionBlock} >
                <img className={s.ava} src='https://img.fotocommunity.com/black-beauty-7e841759-463f-4f69-aa15-5f66b509f2fa.jpg?height=1000' />
                Description
            </div>
        </div>
    );
}


export default ProfileInfo;