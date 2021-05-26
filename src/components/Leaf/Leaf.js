import styles from './Leaf.module.css'

function Leaf(props) {
    return (
        <div>
            {props.leaf.buddies.map((plant, idx) =>
                <article>
                    <div>{plant.name}</div>
                    <div>{plant.schedule} days</div>
                </article>
            )}
        </div>
    )
}

export default Leaf;