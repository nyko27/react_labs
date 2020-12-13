import React from "react";
import { Button, Jumbotron, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ShopInfo.css";

export default function ShopInfo() {
  return (
    <Jumbotron className="jumbotron">
      <div className="jumbotron_content_wrapper">
        <h1 className="jumbotron_title">
          Discover the wonderful world of tastes with our market
        </h1>
        <Row>
          <Col>
            <p style={{ marginTop: "80px", fontSize: "1.5rem", marginLeft: '15%' }}>
              Market seems never ending. This is not your normal grocery store
              cheese selection. The extensive selection rivals its competitors
              and can come in pre-cut and sized pieces. All the cheese is also
              well priced. The people in the cheese department are
              knowledgeable, and the fact that this is a good grocery store
              makes it easier to rationalize buying nice cheese with your normal
              groceries.
            </p>
          </Col>
          <Col>
            <img
              src="https://cf.ltkcdn.net/gourmet/images/orig/219979-2125x1411-Emmental-cheese.jpg"
              alt="cheese"
              style={{ width: "60%", marginTop: "40px", borderRadius: "40px", height: '320px' }}
            />
          </Col>
        </Row>
        <p>
          <Button className="jumbotron_button"  variant="primary">
            See more
          </Button>
        </p>
      </div>
    </Jumbotron>
  );
}
