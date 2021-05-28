import styles from './Leaf.module.css'
import Countdown from '../Countdown/Countdown'
import { useState } from 'react';
import ShowLeaf from '../ShowLeaf/ShowLeaf'

function Leaf(props) {



    // leaf styles

    const aliveTheme = {
        background: 'green',
    }

    const deadTheme = {
        background: 'brown',
    }

    const [leafStyle, setLeafStyle] = useState(aliveTheme)



    return (
        <div>
            {props.leaf.buddies.map((plant, idx) =>
                <div className={styles.Leaf} >

                    {/* <ShowLeaf
                        name={plant.name}
                        schedule={plant.schedule}
                        plantId={plant._id}
                        handleDelete={props.handleDelete}
                        num={idx}
                    /> */}
                    <p>yo</p>
                </div>
            )}
        </div>
    )
}

export default Leaf;