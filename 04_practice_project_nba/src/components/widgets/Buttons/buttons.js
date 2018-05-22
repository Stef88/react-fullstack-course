import React from 'react';
import {Link} from 'react-router-dom';

import styles from './buttons.css';


const buttons = (props) => {
    let template = null;
    
    switch(props.type) {
        case 'loadmore':
            template = (
                <div className={styles.btn__blue}
                    onClick={props.loadMore}>
                    {props.cta}
                </div>
            );
            break;
        case 'linkTo':
            template = (
                <Link to={props.linkTo}
                    className={styles.btn__blue}>
                    {props.cta}
                </Link>
            );
            break;
        default:
            template=null;
    }
    return template;
}

export default buttons;