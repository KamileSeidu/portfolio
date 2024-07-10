import classes from "../components/MainNavigation.module.css";
import logo from "../assets/Logo.png";
import { useState } from "react";

export default function MainNavigation() {
  const [isToggled, setIsToggled] = useState(false);
  const clickHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav>
      <div className={classes.logo}>
        <img src={logo} alt="" />
        <h1>
          <span>K</span>amile
        </h1>
      </div>
      <input
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        className={`${classes.menu} ${classes["menu-size"]}`}
        onClick={clickHandler}
      ></input>
      <ul className={`${isToggled && classes.expanded}`}>
        <li>
          <a
            href="
        "
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="
        "
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="
        "
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="
        "
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="
        "
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="
        "
            className={`${classes["btn--primary"]}`}
          >
            Downlaod CV
          </a>
        </li>
      </ul>
    </nav>
  );
}
