import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './cardInfo.css';

const CardInfo = (props) => {
    return(
        <div className={styles.cardInfo}>
            <span className={styles.teamName}>
                cavaliers
            </span>
            <span className={styles.date}>
                <FontAwesome name="clock-o"/>
                12/20
            </span>
        </div>
    )
}

export default CardInfo;