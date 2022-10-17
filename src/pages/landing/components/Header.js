import React from "react";
import "./header.css";
import web from "./images/shopify.svg";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import WhatsApp from "./images/whatsapp.png";

const Header = () => {
  const submitHandle = () => {
    alert("you clicked me");
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <h4> Built on Official WhatsApp Business Platform</h4>
            <h1>Grow your business faster with WhatsApp</h1>
            <h3>Transform conversations to commerce using Interakt</h3>
            <ul>
              <li> Share catalogs at scale</li>
              <li>Automate notifications</li>
              <li>Send bulk campaigns</li>
              <li>Multi-agent team inbox</li>
              <li>Track campaign analytics</li>
              <li>Green tick verification</li>
            </ul>
            <div className="buttons">
              <button onClick={submitHandle}>Try Interakt for Free</button>
              <img className="image" src={web} />
            </div>
            <p>14 day free trial. No credit card required.</p>
          </div>

          <div className="header-right">
            <img
              src={
                "https://global-uploads.webflow.com/5f20e61707a963c75f6a6729/6220a99b3379707357e48bc7_hero.png"
              }
              alt="chat"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
