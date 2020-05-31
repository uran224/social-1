import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [ 
                {id: 1, message:"Hey, how are you getting on, asshole?", likesCount: "100500"},
                {id: 2, message:"This is the second post!", likesCount: "20"},
                {id: 3, message:"Asshole!", likesCount: "10"},
                {id: 4, message:"This is the fdsfdssd", likesCount: "111"} 
            ],
            newPostText: ''
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);

    }

}


export default store;
window.state = store;
// store - OOP
