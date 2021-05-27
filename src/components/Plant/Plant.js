import styles from './Plant.module.css'
import Leafs from '../Leafs/Leafs'
import NewLeaf from '../NewLeaf/NewLeaf'

function Plant(props) {
    return (
        <div className={styles.Plant}>
            <section>
                <Leafs leaf={props.leaf} />
                <hr />

                <NewLeaf leaf={props.leaf} handleSubmit={props.handleSubmit} handleChange={props.handleChange} />
            </section>
        </div>

    )
}

export default Plant;