import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">John</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/2">Mary</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Peter</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Rebekka</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Margery</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi asshole</div>
                <div className={s.message}>How are you?</div>
        
            </div>
        </div>
    );
}

export default Dialogs;
