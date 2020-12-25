import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Item from "../CheeseCard/CheeseCard";
import "./Catalog.css";

export default function Catalog() {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="list_title">CATALOG</h1>
      <Row className="items_row">
        <Col>
          <Item
            title="Parmesan"
            desc="desc"
            price="300"
            img="https://www.thespruceeats.com/thmb/nfMcJB5tlMZTWOVXP4b4FqqbQ6M=/1414x1414/smart/filters:no_upscale()/Parmesan-cheese-GettyImages-117078872-5873ca725f9b584db3463216.jpg"
          />
        </Col>
        <Col>
          <Item
            title="Mozzarella"
            desc="desc"
            price="400"
            img="https://www.seriouseats.com/recipes/images/2015/10/20151017-pies-vicky-wasik-2-1500x1125.jpg"
          />
        </Col>
        <Col>
          <Item
            title="default"
            desc="desc"
            price="123"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Zacharie_Cloutier_%28fromage%29.jpg/270px-Zacharie_Cloutier_%28fromage%29.jpg"
          />
        </Col>
      </Row>
      <Row className="items_row">
        <Col>
          <Item
            title="1123"
            desc="desc"
            price="123"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Zacharie_Cloutier_%28fromage%29.jpg/270px-Zacharie_Cloutier_%28fromage%29.jpg"
          />
        </Col>
        <Col>
          <Item
            title="Oxford Blue"
            desc="desc"
            price="999"
            img="https://cdn.shopify.com/s/files/1/0363/6841/products/OxBlueBTB_copy_900x.jpg?v=1596050231"
          />
        </Col>
        <Col></Col>
      </Row>
      <Button className='all_products_button' variant="primary" size="lg" block>
        View more
      </Button > 
    </div>
  );
}
