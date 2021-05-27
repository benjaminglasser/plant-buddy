import styles from './Plant.module.css'
import Leafs from '../Leafs/Leafs'



function Plant(props) {
    return (

        <div className={styles.main}>
            <div className={styles.plant}>
                <Leafs className={styles.Plant} leaf={props.leaf} />
            </div>
        </div >


    )
}

export default Plant;