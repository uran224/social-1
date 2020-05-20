import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
        </div> 
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Mary'},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Carol'},
        {id: 5, name: 'Ursula'}
    ]; 
    
    let messagesData = [
        {text:'Hi, how are you!'},
        {text:'Hi, asshole'},
        {text:'How are you getting on?'},
        {text:'Yo'},
        {text:'Yo'}
    ];

    return (
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />


            </div>
            <div className={s.messages}>
                <Message text = {messagesData[0].text} />
                <Message text = {messagesData[1].text} />
                <Message text = {messagesData[2].text} />
                <Message text = {messagesData[3].text} />
                <Message text = {messagesData[4].text} />
         
            </div>
        </div>
    );
}

export default Dialogs;
