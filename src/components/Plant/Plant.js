import styles from './Plant.module.css'
import Leafs from '../Leafs/Leafs'

function Plant(props) {
    return (
        <div className={styles.Plant}>
            <section>
                <Leafs leaf={props.leaf} />
                <hr />

                <div className={styles.input}>
                    <label>

                        <input name="name" placeholder="Enter Name" />
                        <input name="schedule" placeholder="days" className={styles.days} />
                    </label>
                    <button>submit</button>
                </div>
            </section>
        </div>

    )
}

export default Plant;