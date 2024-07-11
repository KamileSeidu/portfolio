import classes from "../components/Hero.module.css";
import kamile from "../assets/kamile.jpg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import whatsapp from "../assets/whatsapp.svg";

export default function Hero() {
  return (
    <div className={`${classes["hero-container"]}`}>
      <div className={classes.hero}>
        <h1>Hi I am</h1>
        <h2>Kamile Seidu</h2>
        <h3>Frontend</h3>
        <h4>Web Developer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          repudiandae? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eos, cumque?
        </p>
        <a href="" className={`${classes["btn--primary"]}`}>
          Hire Me
        </a>
      </div>
      <div className={`${classes["profile-group"]}`}>
        <span className={classes.span}>
          <img src={kamile} alt="" className={classes.profile} />
        </span>
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
      </div>
    </div>
  );
}
