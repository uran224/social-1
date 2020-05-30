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
                {id: 1, text:'Hi, how are you!'},
                {id: 2, text:'Hi, shit asshole!'},
                {id: 3, text:'How are you getting on?'},
                {id: 4, text:'Yo'},
                {id: 5, text:'Yo'}
            ]
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

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;

window.state = store;
// store - OOP
