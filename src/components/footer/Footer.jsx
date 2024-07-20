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
        <a href="">
          <img src={linkedin} alt="" />
        </a>
        <a href="">
          <img src={facebook} alt="" />
        </a>
        <a href="">
          <img src={twitter} alt="" />
        </a>
        <a href="">
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
