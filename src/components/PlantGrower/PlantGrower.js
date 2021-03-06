import "./PlantGrower.css"
import ShowLeaf2 from '../ShowLeaf2/ShowLeaf2'

const PlantGrower = (props) => {




    return (
        <>
            <div className="wrapper">
                <div className="box">
                    {props.leaf.buddies ? (
                        <div className="plant">
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
                        </div>
                    ) : window.location.reload()}

                    <div className="pot"></div>
                    <div className="pot-top"></div>
                </div>
            </div>

        </>
    )
}

export default PlantGrower