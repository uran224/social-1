import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://www.hairstyleforblackwomen.net/wp-content/uploads/2018/02/beautiful-black-women-photography.jpg' />
            {props.message}
            <div>
            {props.likesCount} <span> likes</span>
            </div>
        </div>

    );
}

export default Post;