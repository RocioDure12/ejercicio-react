import "../styles/Card.scss";
import Button from "./Button"
const Card = ({title, descripcion, img, contentButton}) => {
    return (
        <div className="card-container">
            <div className="box">
                <div className="image">
                    <img src={img} alt=""></img>
                </div>
            </div>
            <h1>{title}</h1>
            <p className="">{descripcion}</p>
            <Button content={contentButton}></Button>
            

        </div>


    )
}

export default Card;