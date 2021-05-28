import styles from './Countdown2.module.css'
import { useEffect, useState } from 'react';

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

    // main calculate function
    const calculateTimeLeft = () => {

        //calculates the future date
        let getFutureDate = newDate(props.schedule);

        // calculates the difference in milliseconds from the future date to now
        const difference = +new Date(
            `${getFutureDate} 00:00:00`
            // '05/27/2021 17:13:00'
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

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    function handleReset() {
        console.log('clicked')
    }

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Water Your Buddy!</span>}
            <button onClick={handleReset}>reset</button>
            {/* <button onClick={props.handleStyleChange}>change color</button> */}
        </div>
    )
}

export default Countdown;