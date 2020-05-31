const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [ 
        {id: 1, message:"Hey, how are you getting on, asshole?", likesCount: "100500"},
        {id: 2, message:"This is the second post!", likesCount: "20"},
        {id: 3, message:"Asshole!", likesCount: "10"},
        {id: 4, message:"This is the fdsfdssd", likesCount: "111"} 
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:    
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
   
}

/*
export const addPostActionCreator = () => {
    return {
       type: ADD_POST
    }
}
// если возвращаем только один объект, можно упростить синтаксис
*/

export const addPostActionCreator = () => ( { type: ADD_POST } );
export const updateNewPostTextActionCreator = (text) => ( { type: UPDATE_NEW_POST_TEXT, newText: text } );


export default profileReducer;
