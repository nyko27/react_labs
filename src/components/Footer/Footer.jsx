import React from "react";
import "./Footer.css";
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img
          src="https://www.svgrepo.com/show/91797/cheese.svg"
          alt="logo"
          height="80px"
        />
        <h3>Cheese market</h3>
      </div>
      <div className="icons_container">
        <TwitterOutlined className="footer_icon" />
        <FacebookOutlined className="footer_icon" />
        <GoogleOutlined className="footer_icon" />
        <InstagramOutlined className="footer_icon" />
      </div>
      <p className='footer_copyright' >© 2020 Cheese market. All rights reserved.</p>
    </div>
  );
}
