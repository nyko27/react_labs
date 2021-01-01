import {React,Fragment} from "react";
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CheeseCard.css";

export default function CheeseCard(props) {
  return (
    <Fragment>
      <Card className="item_card">
        <Card.Img className="card_img" src={props.img} variant="top" />
        <Card.Body>
          <Card.Title>{props.title} </Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Card.Text>{props.price}</Card.Text>
          <Button className="card_button" variant="outline-dark">
            View more
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
}
