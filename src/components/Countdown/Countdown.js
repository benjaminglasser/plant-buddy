import styles from './Countdown.module.css'
import { useRef, useState, useEffect } from 'react';

const Countdown = (props) => {


    // helper function to figure out next date from now
    function newDate(numDays) {
        const dateNow = new Date();
        let numberOfDaysToAdd = numDays;
        dateNow.setDate(dateNow.getDate() + numberOfDaysToAdd);

        let mm = dateNow.getMonth() + 1;
        let dd = dateNow.getDate();
        let y = dateNow.getFullYear();

        let formattedDate = `${mm}/${dd}/${y}`;
        return formattedDate;
    }


    // creates state variables
    const [timerDays, setTimerDays] = useState('')
    const [timerHours, setTimerHours] = useState('')
    const [timerMinutes, setTimerMinutes] = useState('')
    const [timerSeconds, setTimerSeconds] = useState('')

    let interval = useRef();
    let getFutureDate = useRef();

    //Starts Timer
    const startTimer = () => {

        getFutureDate = newDate(props.schedule);

        //Sets the date that you would like to countdown from 
        // TODO: make the end date a variable
        const countdownDate = new Date(`${getFutureDate} 00:00:00`).getTime();

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
            if (distance <= 0) {
                // stop timer
                // props.handleStyleChange();
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

    //reset function
    function handleReset() {

        clearInterval(interval.current);
        console.log('clicked')


    }

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
                        <button onClick={handleReset}>reset</button>
                        <button onClick={props.handleStyleChange}>change color</button>

                    </div>

                </section>
            </section>
        </div>
    )
}

export default Countdown;