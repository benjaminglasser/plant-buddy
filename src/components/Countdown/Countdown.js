import styles from './Countdown.module.css'
import { useEffect, useState } from 'react';

const Countdown = (props) => {

    // TODO: if the hours, minutes, and seconds === 0, props.schedule - 1 and run it again


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

    // main calculate function
    const calculateTimeLeft = () => {

        //calculates the future date
        let getFutureDate = newDate(props.schedule);

        // calculates the difference in milliseconds from the future date to now
        const difference = +new Date(
            `${getFutureDate} 00:00:00`
            // '05/27/2021 20:43:00'
        ) - +new Date();

        let timeLeft = {};

        //converts to days, hours, minutes, sec
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                //comment this out
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)

            };
        }

        return timeLeft;

    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {


        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer);


    })

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, idx) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    // timerComponents.push(
    //     <div>
    //         <span>{timeLeft.days} days </span>
    //         <span>{timeLeft.hours} hours </span>
    //         <span>{timeLeft.minutes} minutes </span>
    //         <span>{timeLeft.seconds} seconds </span>
    //     </div>
    // );



    // if (timerComponents.length === 0) {
    //     props.setLeafStyle(props.deadTheme)
    // }

    function handleReset() {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer);
    }

    return (
        <div className={styles.Cntr}>

            {timerComponents.length ?
                timerComponents
                : <button onClick={handleReset}>Water Your Buddy!</button>}


        </div>
    )
}

export default Countdown;