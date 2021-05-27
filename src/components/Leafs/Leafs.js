import styles from './Leafs.module.css'
import Leaf from '../Leaf/Leaf'


function Leafs(props) {
    return (
        <div>
            <Leaf leaf={props.leaf} />
        </div>

    )
}

export default Leafs