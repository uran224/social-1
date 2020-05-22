import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Jim'},
        {id: 2, name: 'Marta'},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Carol'},
        {id: 5, name: 'Ursula'}
    ]; 


    let messages = [
        {id: 1, text:'Hi, how are you!'},
        {id: 2, text:'Hi, asshole'},
        {id: 3, text:'How are you getting on?'},
        {id: 4, text:'Yo'},
        {id: 5, text:'Yo'}
    ];

    let dialogsElements = dialogs.map( d  => <DialogItem id={d.id} name={d.name} /> );
    let messagesElements = messages.map( m =>  <Message text = {m.text} />);

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
