import styles from './Countdown2.module.css'
import { useEffect, useState } from 'react';

const Countdown = (props) => {



    return (
        <div className={styles.Cntr}>

            { props.nextDate !== props.today ?
                props.nextDate
                : <button onClick={() => props.handleUpdate(props.plantId)}>Water Your Buddy!</button>}


        </div>
    )
}

export default Countdown;