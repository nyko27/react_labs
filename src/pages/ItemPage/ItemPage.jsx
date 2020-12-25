import React from "react";
import { Link, useParams } from "react-router-dom";
import { cheesesContext } from "../../contexts/cheeses.jsx";
import { Row, Col, Button } from "react-bootstrap";
import "./ItemPage.css";

export default function ItemPage() {
  const cheeses = React.useContext(cheesesContext);
  const { id } = useParams();
  const cheese = cheeses.find((item) => item.id === parseInt(id));

  return (
    <div className="item-page">
      <Row>
        <Col>
          <img
            src={cheese.img}
            alt="Awesome cheese"
            width="700px"
            height="500px"
            className="item-image"
          />
        </Col>
        <Col>
          <h1 className="title">{cheese.title}</h1>
          <div style={{ color: "lightslategray", fontSize: "1.3rem" }}>
            {cheese.desc}{" "}
          </div>
          <div className="lower">
            <h1 className="price">{cheese.price} $</h1>
            <Link to="/catalog">
              <Button variant="outline-dark" className="item-page-button">
                Go Back
              </Button>
            </Link>
            <div>
              <Button variant="outline-dark" className="item-page-button">
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
