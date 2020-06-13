const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [ 
        {id: 1, message:"Hey, how are you getting on, asshole?", likesCount: "100500"},
        {id: 2, message:"This is the second post!", likesCount: "20"},
        {id: 3, message:"Asshole!", likesCount: "10"},
        {id: 4, message:"This is the fdsfdssd", likesCount: "111"} 
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

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
export const setUserProfile = (profile) => ( { type: SET_USER_PROFILE, profile } );

export default profileReducer;