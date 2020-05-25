import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d  => <DialogItem id={d.id} name={d.name} /> );
    let messagesElements = props.state.messages.map( m => <Message text = {m.text} />);

    return (
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={s.messages}>

                { messagesElements }
         
            </div>
        </div>
    );
}

export default Dialogs;
