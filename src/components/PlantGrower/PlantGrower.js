import "./PlantGrower.css"

import { useEffect } from 'react'
import ShowLeaf from '../ShowLeaf/ShowLeaf'
import ShowLeaf2 from '../ShowLeaf2/ShowLeaf2'

const PlantGrower = (props) => {

    // grow function
    // function handleDrop() {
    //     $(".stem").addClass("rain");

    //     setTimeout(function () {
    //         $('.stem').removeClass('rain');
    //     }, 1200);
    // };

    // useEffect(() => {
    //     handleDrop()
    // }, [])

    return (
        <>
            <div className="wrapper">
                <div className="box">
                    {props.leaf.buddies ? (
                        <>
                            <div className="flower"></div>
                            <div className="stem">
                                {props.leaf.buddies.map((plant, idx) =>
                                    <div key={idx}>

                                        <ShowLeaf2
                                            created={plant.updatedAt}
                                            name={plant.name}
                                            img={plant.img}
                                            schedule={plant.schedule}
                                            plantId={plant._id}
                                            handleDelete={props.handleDelete}
                                            idx={idx}
                                            handleUpdate={props.handleUpdate}
                                            handleEdit={props.handleEdit}
                                        />

                                    </div>
                                )}
                            </div>
                        </>
                    ) : window.location.reload()}

                    <div className="pot"></div>
                    <div className="pot-top"></div>
                </div>
            </div>

        </>
    )
}

export default PlantGrower