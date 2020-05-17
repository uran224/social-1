import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (

        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKJgxlQnbInUpGiHA6OL6t_gaRHZgRPGCitox2eXi4l15CEYQY&usqp=CAU' />
            post 1
            <div>
                <span>like</span>
            </div>
            
            
        </div>

    );
}

export default Post;