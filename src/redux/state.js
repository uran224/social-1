const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [ 
                {id: 1, message:"Hey, how are you getting on, asshole?", likesCount: "100500"},
                {id: 2, message:"This is the second post!", likesCount: "20"},
                {id: 3, message:"Asshole!", likesCount: "10"},
                {id: 4, message:"This is the fdsfdssd", likesCount: "111"} 
            ],
            newPostText: 'Type smth, asshole'
        },
    
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Jim'},
                {id: 2, name: 'Marta-Marta'},
                {id: 3, name: 'Peter II'},
                {id: 4, name: 'Carol'},
                {id: 5, name: 'Ursula'}
            ],
    
            messages: [
                {id: 1, message: 'Hi, how are you!'},
                {id: 2, message: 'Hi, shit asshole!'},
                {id: 3, message: 'How are you getting on?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ''
        },
    
        sidebar: {
            // for homework
        }
    },
    _callSubscriber() {
        console.log('State has changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer  // addEventListener
    },

    dispatch(action) { 
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
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

export const sendMessageCreator = () => ( { type: SEND_MESSAGE } );
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.state = store;
// store - OOP
