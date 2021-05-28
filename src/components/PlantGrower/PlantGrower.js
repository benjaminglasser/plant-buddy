import "./PlantGrower.css"
import $ from 'jquery'
import { useEffect } from 'react'

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

                        <div className="leaf1"></div>


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