import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    John
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Mary
                </div>
                <div className={s.dialog}>
                    Peter
                </div>
                <div className={s.dialog}>
                    Rebekka
                </div>
                <div className={s.dialog}>
                    Margery
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
