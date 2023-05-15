import Card from "react-bootstrap/Card";
import "../css/ProductCard.css";
import { useState } from "react";
import { SuitHeart } from "react-bootstrap-icons";
import FaceBookShare from "./FacebookShare";

function ProductCard({ product, onAdd, onAddWishlist }) {
  const [hover, setHover] = useState(false);
  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  return (
    <Card>
      <div className="zoom-effect d-flex">
        <Card.Img
          style={{
            cursor: "pointer",
            transform: hover ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s",
            opacity: hover ? 0.6 : 1,
          }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          variant="top"
          src={product.bild}
          alt={product.produktnamn}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.produktnamn}</Card.Title>
        <Card.Text>{product.kategori}</Card.Text>
        <Card.Text className="mb-4">{product.info}</Card.Text>
        <div className="d-flex justify-content-between mt-auto">
          <button className="btn btn-dark px-4" onClick={() => onAdd(product)}>
            Köp
          </button>
          <div>
            <button
              className="btn btn-light mx-3"
              onClick={() => onAddWishlist(product)}
            >
              <SuitHeart />
            </button>
            <div className="btn btn-light">
              <FaceBookShare product={product} />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
