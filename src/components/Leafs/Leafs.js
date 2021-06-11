
import Leaf from '../Leaf/Leaf'


function Leafs(props) {
    return (
        <div>
            <Leaf
                leaf={props.leaf}
                handleDelete={props.handleDelete}
            />
        </div>

    )
}

export default Leafs