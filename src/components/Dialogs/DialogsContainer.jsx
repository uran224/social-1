import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
       dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

// над редиректом создадим HOC компоненту
let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);


export default DialogsContainer;
