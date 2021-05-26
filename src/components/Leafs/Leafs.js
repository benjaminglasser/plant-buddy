import styles from './Leafs.module.css'
import Leaf from '../Leaf/Leaf'

function Leafs(props) {
    return (
        <Leaf leaf={props.leaf} />
    )
}

export default Leafs