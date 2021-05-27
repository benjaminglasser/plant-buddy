import styles from './Leaf.module.css'
import Countdown from '../Countdown/Countdown'

function Leaf(props) {
    return (
        <div>
            {props.leaf.buddies.map((plant, idx) =>
                <div className={styles.Leaf}>
                    <article key={idx}>
                        <div>{plant.name}</div>
                        <div>{plant.schedule} days</div>
                    </article>
                    <Countdown />
                </div>
            )}
        </div>
    )
}

export default Leaf;