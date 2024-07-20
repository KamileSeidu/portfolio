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
      </div>
    </div>
  );
}
