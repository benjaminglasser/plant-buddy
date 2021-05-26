import styles from './NewLeaf.module.css'

function NewLeaf(props) {
    return (
        <div className={styles.input}>
            <label>

                <input name="name" placeholder="Enter Name" />
                <input name="schedule" placeholder="days" className={styles.days} />
            </label>
            <button>submit</button>
        </div>
    )
}

export default NewLeaf;