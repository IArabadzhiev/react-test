import React, {Fragment} from 'react';

import styles from './Input.css';

export default (props) => {
    return (
        <Fragment>
            <label htmlFor={props.options.id}></label>
            <input className={styles.Input} {...props.options} onChange={(event) => props.changeHandler(event, props.options.id)}/>
        </Fragment>
    );
}