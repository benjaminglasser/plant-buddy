import styles from './Plant.module.css'
import Leafs from '../Leafs/Leafs'
import PlantGrower from '../PlantGrower/PlantGrower'



function Plant(props) {
    return (

        <div className={styles.main}>
            <div className={styles.plant}>
                {/* <Leafs
                    className={styles.Plant}
                    leaf={props.leaf}
                    handleDelete={props.handleDelete}
                /> */}

                <PlantGrower
                    className={styles.plant}
                    leaf={props.leaf}
                    handleDelete={props.handleDelete}
                    handleUpdate={props.handleUpdate}
                    handleEdit={props.handleEdit}
                />

            </div>
        </div >


    )
}

export default Plant;