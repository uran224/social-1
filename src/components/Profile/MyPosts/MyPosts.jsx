import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
/* 
    let posts = [
        {id: 1, message:"Hey, how are you getting on, asshole?", likesCount: "100500"},
        {id: 2, message:"This is the second post!", likesCount: "20"},
        {id: 3, message:"Asshole!", likesCount: "10"},
        {id: 4, message:"This is the fdsfdssd", likesCount: "111"}
     
    ]; 
 */
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                   <textarea></textarea>
                </div>
                <div>
                   <button>Add post</button>
                </div>

            </div>

            <div className={s.posts}>
                { postsElements  }

            </div>
        </div>
    );
}

export default MyPosts;