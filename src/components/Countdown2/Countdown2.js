import styles from './Countdown2.module.css'
import moment from 'moment'

const Countdown = (props) => {



    return (
        <div className={styles.Cntr}>

            { moment(props.today).isBefore(props.nextDate) ?
                <h3>Next watering date: {props.nextDate}</h3>
                : <button className={styles.waterBuddy} onClick={() => props.handleUpdate(props.plantId)}>Water Your Buddy!</button>}


        </div>
    )
}

export default Countdown;