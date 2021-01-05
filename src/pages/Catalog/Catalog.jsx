import React, { useState, useEffect } from "react";
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
  Spinner,
} from "react-bootstrap";

import {
  getСheeses,
  getCheesesFilteredByPrice,
  getCheesesFilteredByType,
  delay,
} from "../../components/Api/api";
import "./Catalog.css";

export default function Catalog() {
  const [cheeses, setCheeses] = useState([]);
  const [spinner, setSpinner] = useState('block');
  const [shownItemsCount, setShownItemsCount] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);

  const search = (searchedString) => {
    console.log(filteredItems);
    setFilteredItems(() =>
      cheeses.filter((cheese) =>
        cheese.title.toLowerCase().includes(searchedString)
      )
    );
  };

  const viewMore = () => {
    setShownItemsCount(shownItemsCount + 3);
    setFilteredItems(cheeses.slice(0, shownItemsCount));
  };

  useEffect(() => {
    viewMore();
  }, [cheeses]);

  useEffect(() => {
    (async () => {
      await delay(500);
      setCheeses(await getСheeses());
      setSpinner('none');
    })();
  }, []);

  async function setPriceFilter(price) {
    setSpinner('block');
    await delay(500);
    setFilteredItems(await getCheesesFilteredByPrice(price));
    setSpinner('none');
  }

  async function setTypeFilter(type) {
    setSpinner('block');
    await delay(500);
    setFilteredItems(await getCheesesFilteredByType(type));
    setSpinner('none');
  }

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
                <Dropdown.Item
                  onClick={async () => await setTypeFilter("Parmesan")}
                  eventKey="1"
                >
                  Parmesan
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={async () => await setTypeFilter("Mozzarella")}
                  eventKey="2"
                >
                  Mozzarella
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={async () => await setTypeFilter("Flawless")}
                  eventKey="3"
                >
                  Flawless
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={async () => await setTypeFilter("Oxford Blue")}
                  eventKey="4"
                >
                  Oxford Blue
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={async () => await setTypeFilter("Swiss")}
                  eventKey="5"
                >
                  Swiss
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={async () => await setTypeFilter("Red Havk")}
                  eventKey="6"
                >
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
                <Dropdown.Item
                  onClick={async () => await setPriceFilter(200)}
                  eventKey="1"
                >
                  less than 200 $
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={async () => await setPriceFilter(1000)}
                  eventKey="2"
                >
                  less than 1000 $
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={async () => await setPriceFilter(10000)}
                  eventKey="3"
                >
                  less than 10000 $
                </Dropdown.Item>
              </DropdownButton>
            ))}
          </div>
        </div>
        <div>
          <Spinner style={{display: `${spinner}`}}className="spinner" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
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
                <Button className="card_button" variant="outline-dark">
                  View more
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button
        className="main_view_more"
        variant="outline-dark"
        onClick={viewMore}
      >
        View more
      </Button>
    </div>
  );
}
