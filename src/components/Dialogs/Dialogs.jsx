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
    return (
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="John" />
                <DialogItem id="2" name="Mary" />
                <DialogItem id="3" name="Peter" />
                <DialogItem id="4" name="Carol" />
                <DialogItem id="5" name="Ursula" />

            </div>
            <div className={s.messages}>
                <Message text = "Hi, how are you!" />
                <Message text = "Hi, asshole" />
                <Message text = "How are you getting on?" />
                <Message text = "Yo" />
                <Message text = "Yo" />
         
            </div>
        </div>
    );
}

export default Dialogs;
