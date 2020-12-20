import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Button,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Form,
} from "react-bootstrap";
import Item from "../CheeseCard/CheeseCard";

import "./Catalog.css";

export default function Catalog() {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="list_title">CATALOG</h1>
      <div className="filters_search">
        <div className="col1">
          <div>
            {["Filter1", "Filter2", "Filter3"].map((variant) => (
              <DropdownButton
                className="dropdown_button"
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant="dark"
                title={variant}
              >
                <Dropdown.Item eventKey="1">Price</Dropdown.Item>
                <Dropdown.Item eventKey="2">Caloric content</Dropdown.Item>
              </DropdownButton>
            ))}
            <Button
              style={{
                marginLeft: "60px",
                backgroundColor: "chocolate",
                border: "0",
                width: "140px",
              }}
              variant="primary"
            >
              Apply
            </Button>
          </div>
        </div>
        <div className="col2">
          <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto" style={{ marginLeft: "500px" }}>
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="whatever"
                />
              </Col>

              <Col xs="auto">
                <Button type="submit" className="mb-2" variant="dark">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </div>
      <div className="items">
        {cheeseCards.map((cheese) => (
          <Item
            title={cheese.title}
            desc={cheese.desc}
            price={cheese.price}
            img={cheese.img}
          />
        ))}
      </div>
    </div>
  );
}

const cheeseCards = [
  {
    title: "Parmesan",
    desc: "desc",
    price: "300",
    img:
      "https://www.thespruceeats.com/thmb/nfMcJB5tlMZTWOVXP4b4FqqbQ6M=/1414x1414/smart/filters:no_upscale()/Parmesan-cheese-GettyImages-117078872-5873ca725f9b584db3463216.jpg",
  },
  {
    title: "Mozzarella",
    desc: "desc",
    price: "400",
    img:
      "https://www.seriouseats.com/recipes/images/2015/10/20151017-pies-vicky-wasik-2-1500x1125.jpg",
  },

  {
    title: "flawless",
    desc: "desc",
    price: "673",
    img:
      "https://media.newyorker.com/photos/5f245aa0698a316b79e7ce0c/16:9/w_1280,c_limit/Tandoh-cheese.jpg",
  },
  {
    title: "Oxford Blue",
    desc: "desc",
    price: "999",
    img:
      "https://cdn.shopify.com/s/files/1/0363/6841/products/OxBlueBTB_copy_900x.jpg?v=1596050231",
  },
  {
    title: "Swiss",
    desc: "niceee",
    price: "5500",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wxBokqovmqwjvfx_9Mz38OS7p7LDeim6Hw&usqp=CAU",
  },
  {
    title: "Red Havk",
    desc: "but tasty",
    price: "350",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cowgirl_Creamery_Point_Reyes_-_Red_Hawk_cheese.jpg",
  },
  {
    title: "Feta",
    desc: "exquisite",
    price: "980",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Feta_Cheese.jpg/1200px-Feta_Cheese.jpg",
  },
  {
    title: "default",
    desc: "desc",
    price: "123",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Zacharie_Cloutier_%28fromage%29.jpg/270px-Zacharie_Cloutier_%28fromage%29.jpg",
  },
];
