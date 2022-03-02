import React from "react"; 

import style from './Modal.module.css';
import Button from "./Button";

const Modal = props => {
    return (
        <div className={style.modal}>
            <div className={style.modal__overlay} onClick={props.onClick}></div>
            <div className={style.modal__inner}>
                <div className={style.modal__inner__title}>{props.title}</div>
                <div className={style.modal__inner__message}>{props.message}</div>
                <Button onClick={props.onClick} className={style.modal__inner__button}>{props.textButton}</Button>
            </div>
        </div>
    )
}

export default Modal;