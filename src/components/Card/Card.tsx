import "./Card.scss";
import { FaShareAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Card = (props: any) => {
  return (
    <div className="card shadow">
      <div className="card-body d-flex flex-row justify-content-center">
        <h5 className="card-title font-weight-bold">{props.title}</h5>
      </div>
      <div className="bg-image">
        <img className="img-fluid" src={props.imgSrc} alt="cap" />
      </div>
      <div className="card-body">
        <p className="card-text">{props.cardText}</p>
        <div className="d-flex justify-content-between">
          <div>
            <p>haha</p>
          </div>
          <div className="buttons">
            <FaShareAlt className="share me-2" />
            <FaShoppingCart className="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
