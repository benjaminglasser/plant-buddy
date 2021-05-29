import styles from './Leaf.module.css'
import Countdown from '../Countdown/Countdown'
import { useState } from 'react';

function Leaf(props) {



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
                    <article key={plant._id} >
                        <div style={leafStyle === true ? aliveTheme : deadTheme}>{plant.name}</div>
                        {/* <div>{plant.schedule} days</div> */}
                        <Countdown schedule={plant.schedule} handleStyleChange={handleStyleChange} />
                        <div className={styles.Trash} onClick={() => props.handleDelete(plant._id)}>{'🗑'}</div>
                    </article>
                    {/* <Countdown schedule={plant.schedule} newDate={newDate} handleStyleChange={handleStyleChange} /> */}
                </div>
            )}
        </div>
    )
}

export default Leaf;