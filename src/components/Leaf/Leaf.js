import styles from './Leaf.module.css'
import Countdown from '../Countdown/Countdown'
import Countdown2 from '../Countdown2/Countdown2'
import { useState } from 'react';

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

    // leaf styles
    const [leafStyle, setLeafStyle] = useState(true)

    const aliveTheme = {
        background: 'green',
    }

    const deadTheme = {
        background: 'brown',
    }

    function handleStyleChange() {
        if (leafStyle === false) {
            setLeafStyle(true)
        } else {
            setLeafStyle(false)
        }
    }



    return (
        <div>
            {props.leaf.buddies.map((plant, idx) =>
                <div className={styles.Leaf} >
                    <article key={idx} >
                        <div style={leafStyle === true ? aliveTheme : deadTheme}>{plant.name}</div>
                        {/* <div>{plant.schedule} days</div> */}
                        <Countdown2 schedule={plant.schedule} handleStyleChange={handleStyleChange} />
                    </article>
                    {/* <Countdown schedule={plant.schedule} newDate={newDate} handleStyleChange={handleStyleChange} /> */}
                </div>
            )}
        </div>
    )
}

export default Leaf;