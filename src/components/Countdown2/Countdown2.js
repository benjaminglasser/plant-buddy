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



        return getFutureDate;

    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {


        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer);


    })

    const timerComponents = timeLeft;


    return (
        <div className={styles.Cntr}>

            {timerComponents.length ?
                timerComponents
                : <button >Water Your Buddy!</button>}


        </div>
    )
}

export default Countdown;