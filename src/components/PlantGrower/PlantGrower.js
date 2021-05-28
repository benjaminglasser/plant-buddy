import "./PlantGrower.css"
import $ from 'jquery'
import { useEffect } from 'react'
import ShowLeaf from '../ShowLeaf/ShowLeaf'

const PlantGrower = (props) => {

    // grow function
    function handleDrop() {
        $(".stem").addClass("rain");

        setTimeout(function () {
            $('.stem').removeClass('rain');
        }, 1200);
    };

    // useEffect(() => {
    //     handleDrop()
    // }, [])

    return (
        <>
            <div className="wrapper">
                <div className="box">
                    <div className="stem">
                        {props.leaf.buddies.map((plant, idx) =>
                            <div>
                                <ShowLeaf
                                    name={plant.name}
                                    schedule={plant.schedule}
                                    plantId={plant._id}
                                    handleDelete={props.handleDelete}
                                    idx={idx}
                                />
                                {/* <div className="leaf1"></div> */}
                            </div>
                        )}
                    </div>
                    <div className="pot"></div>
                    <div className="pot-top"></div>
                </div>
            </div>
            <div onClick={handleDrop} className="drop"></div>
        </>
    )
}

export default PlantGrower