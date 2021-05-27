import styles from './NewLeaf.module.css'

function NewLeaf(props) {
    return (
        <div className={styles.input}>
            <form onSubmit={props.handleSubmit}>
                <label>
                    <input value={props.leaf.newBuddy.name} name="name" placeholder="Enter Name" onChange={props.handleChange} />
                    <input value={props.leaf.newBuddy.schedule} name="schedule" placeholder="days" className={styles.days} onChange={props.handleChange} />
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}

export default NewLeaf;