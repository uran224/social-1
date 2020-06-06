const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;  
            return {
                ...state,
                newMessageBody: '',
                messages:   [...state.messages, {id: 6, message: body}] // spread operator
                //instead of "push" syntax
            };        
        case UPDATE_NEW_MESSAGE_BODY:  
            return {
                ...state,
                newMessageBody: action.body
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

export const sendMessageCreator = () => ( { type: SEND_MESSAGE } );
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;