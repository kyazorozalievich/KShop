"use client";
import scss from "./Footer.module.scss";
import logo from "../../assets/headerImg/logo.png";
import Image from "next/image";
import { RxPaperPlane } from "react-icons/rx";
import axios from "axios";
import { useState } from "react";

const Footer = () => {
  const [inpEmail, setInpEmail] = useState<string>("");

  function submitForTelegram() {
    let my_id = `-1002229799825`;
    let token = `7130485277:AAHbd3IW1W07NrlTazHutIYzqtNCPNdD2qs`;
    let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

    let newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
      KShop
      User Email: ${inpEmail}
      `,
    };

    axios.post(api_key, newProduct);
    setInpEmail("");
  }

  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.bottom}>
            <Image src={logo} alt="" />
            <h3>Subscribe</h3>
            <h4>Get 10% off your first order</h4>
            <div className={scss.input}>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setInpEmail(e.target.value)}
              />
              <a
                onClick={() => {
                  submitForTelegram();
                }}
              >
                <RxPaperPlane />
              </a>
            </div>
          </div>
          <div className={scss.bottom}>
            <h3>Category</h3>
            <h4>Outfit</h4>
            <h4>Clothes</h4>
            <h4>Accesspries</h4>
          </div>
          <div className={scss.bottom}>
            <h3>Account</h3>
            <h4>My Account</h4>
            <h4>Login / Register</h4>
            <h4>Wishlist</h4>
          </div>
          <div className={scss.bottom}>
            <h3>Support</h3>
            <h4>Bishkek, street undefined</h4>
            <h4>kshio@gmail.com</h4>
            <h4>+996 999-999-999</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
