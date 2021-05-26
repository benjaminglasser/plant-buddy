import styles from './Plant.module.css'

function Plant(props) {
    return (
        <div className={styles.Plant}>
            <section>
                <article>
                    <div>Name</div>
                    <div>3 days</div>
                </article>

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