import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        {id: 1, message:"Hi, how are you, asshole?", likesCount: "23"},
        {id: 2, message:"This is the second post!", likesCount: "20"},
        {id: 3, message:"Asshole!", likesCount: "55"},
        {id: 4, message:"This is the fdsfdssd", likesCount: "111"}
     
    ]; 

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

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