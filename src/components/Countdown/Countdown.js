import styles from './Countdown.module.css'
import { useRef, useState, useEffect } from 'react';

const Countdown = () => {

    // creates state variables
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    //Starts Timer
    const startTimer = () => {

        //Sets the date that you would like to countdown from 
        // TODO: make the end date a variable
        const countdownDate = new Date('May 31, 2021 00:00:00').getTime();

        // figures out how much time between final date and now
        interval = setInterval(() => {
            // gets time of now
            const now = new Date().getTime()

            //subtracts now from countdown date 
            const distance = countdownDate - now

            // calculates days, hours, minutes, seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // if timer is up then: TODO: set notification
            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update time
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    // componentDidMount

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <div className={styles.CountdownCntr}>
            <section className={styles.timerCntr}>
                <section className={styles.timer}>
                    <div className={styles.clock}>
                        <section>
                            <p>{timerDays}</p>
                            <p><small>Days</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours}</p>
                            <p><small>Hours</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerMinutes}</p>
                            <p><small>Minutes</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerSeconds}</p>
                            <p><small>Seconds</small></p>
                        </section>

                    </div>

                </section>
            </section>
        </div>
    )
}

export default Countdown;