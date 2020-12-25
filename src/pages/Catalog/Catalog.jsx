import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Col,
  Button,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Form,
  Card,
} from "react-bootstrap";
import { cheesesContext } from "../../contexts/cheeses.jsx";

import "./Catalog.css";

export default function Catalog() {
  const cheesesList = useContext(cheesesContext);
  const [filteredItems, setFilteredItems] = useState(cheesesList);
  const [type, setType] = useState("None");
  const [price, setPrice] = useState(0);

  const search = (searchedString) => {
    console.log(filteredItems);
    setFilteredItems(() =>
      cheesesList.filter((cheese) =>
        cheese.title.toLowerCase().includes(searchedString)
      )
    );
  };

  useEffect(() => {
    if (type !== "None") {
      setFilteredItems(cheesesList.filter((cheese) => cheese.title === type));
    }

    if (price !== 0) {
      setFilteredItems(cheesesList.filter((cheese) => cheese.price < price));
    }
  }, [type, price, cheesesList]);

  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="list_title">CATALOG</h1>
      <div className="filters_search">
        <div className="col1">
          <div>
            {["Type"].map((variant) => (
              <DropdownButton
                className="dropdown_button"
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant="dark"
                title={variant}
              >
                <Dropdown.Item onClick={() => setType("Parmesan")} eventKey="1">
                  Parmesan
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setType("Mozzarella")}
                  eventKey="2"
                >
                  Mozzarella
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setType("Flawless")} eventKey="3">
                  Flawless
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setType("Oxford Blue")}
                  eventKey="4"
                >
                  Oxford Blue
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setType("Swiss")} eventKey="5">
                  Swiss
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setType("Red Havk")} eventKey="6">
                  Red Havk
                </Dropdown.Item>
              </DropdownButton>
            ))}
            {["Price"].map((variant) => (
              <DropdownButton
                className="dropdown_button"
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant="dark"
                title={variant}
              >
                <Dropdown.Item onClick={() => setPrice(200)} eventKey="1">
                  less than 200 $
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPrice(1000)} eventKey="2">
                  less than 1000 $
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPrice(10000)} eventKey="3">
                  less than 10000 $
                </Dropdown.Item>
              </DropdownButton>
            ))}
          </div>
        </div>
        <div className="col2">
          <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto" style={{ marginLeft: "900px" }}>
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  className="input-form"
                  id="inlineFormInput"
                  placeholder="Search"
                  onChange={(e) => search(e.target.value)}
                />
              </Col>
            </Form.Row>
          </Form>
        </div>
      </div>
      <div className="items">
        {filteredItems.map((cheese) => (
          <Card className="item_card">
            <Card.Img className="card_img" src={cheese.img} variant="top" />
            <Card.Body>
              <Card.Title>{cheese.title} </Card.Title>
              <Card.Text>{cheese.desc}</Card.Text>
              <Card.Text>{cheese.price}</Card.Text>
              <Link to={"/item/" + cheese.id}>
                <Button className="card_button" variant="primary">
                  View more
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
