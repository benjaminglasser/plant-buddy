import styles from './Leaf.module.css'
import Countdown from '../Countdown/Countdown'

function Leaf(props) {

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



    return (
        <div>
            {props.leaf.buddies.map((plant, idx) =>
                <div className={styles.Leaf}>
                    <article key={idx}>
                        <div>{plant.name}</div>
                        <div>{plant.schedule} days</div>
                    </article>
                    <Countdown schedule={plant.schedule} newDate={newDate} />
                </div>
            )}
        </div>
    )
}

export default Leaf;