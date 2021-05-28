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
                    <article style={leafStyle} key={plant._id} >
                        <div>{plant.name}</div>
                        <Countdown
                            schedule={plant.schedule}
                        />
                        <div style={{ backgroundColor: 'black' }} > {plant.schedule} days</div>
                        <div className={styles.Trash} onClick={() => props.handleDelete(plant._id)}>{'🗑'}</div>
                    </article>
                    <ShowLeaf
                        name={plant.name}
                        schedule={plant.schedule}
                        plantId={plant._id}
                        handleDelete={props.handleDelete}
                    />
                </div>
            )}
        </div>
    )
}

export default Leaf;