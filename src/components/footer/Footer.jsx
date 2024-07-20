import classes from "../footer/Footer.module.css";
import logo from "../../assets/code.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import whatsapp from "../../assets/whatsapp.svg";

export default function Footer() {
  return (
    <footer>
      <div className={classes.logo}>
        <img src={logo} alt="" />
        <h1>
          <span>K</span>amile
        </h1>
      </div>
      <div className={`${classes["social-icons"]}`}>
        <a
          href="https://www.linkedin.com/in/seidu-kamile-19462a2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          alt=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} />
        </a>
        <a
          href="https://www.facebook.com/kha.mil.777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          href="https://x.com/KamileSeidu?t=lRC8PcJKsFGNEMnkFihb2w&s=35"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="" />
        </a>
        <a
          href="https://wa.me/qr/E7FJX26GEPAFM1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="" />
        </a>
      </div>
      <div className={classes.dark}>
        <p>
          @ 2024 <span>Kamile</span> All Rights Reserved, Inc.
        </p>
      </div>
    </footer>
  );
}
