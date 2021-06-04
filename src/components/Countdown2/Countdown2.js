import styles from './Countdown2.module.css'
import { useEffect, useState } from 'react';
import moment from 'moment'

const Countdown = (props) => {



    return (
        <div className={styles.Cntr}>

            { moment(props.today).isSameOrBefore(props.nextDate) ?
                <h3>Next watering date: {props.nextDate}</h3>
                : <button onClick={() => props.handleUpdate(props.plantId)}>Water Your Buddy!</button>}


        </div>
    )
}

export default Countdown;