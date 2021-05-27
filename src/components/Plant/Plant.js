import styles from './Plant.module.css'
import Leafs from '../Leafs/Leafs'



function Plant(props) {
    return (
        <div className={styles.Plant}>
            <section>
                <Leafs leaf={props.leaf} />
                <hr />

            </section>
        </div>

    )
}

export default Plant;