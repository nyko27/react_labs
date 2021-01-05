import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";
import "./Success.css";

export default function Success() {
  return (
    <div>
      <SmileOutlined className="success-icon" />
      <h4 className="success-title">Success!</h4>
      <Link to="/catalog">
        <Button className="back-to-ctlg-btn"  variant="outline-dark">
          Back to catalog
        </Button>
      </Link>
    </div>
  );
}
