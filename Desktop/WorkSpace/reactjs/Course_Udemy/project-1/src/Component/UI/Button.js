import React from "react";

import styles from '../UI/Button.module.css'

const Button = props => {
    return (
        <button type={props.type} className={styles.buttonPrimary} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;