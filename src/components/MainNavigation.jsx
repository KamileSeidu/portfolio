import classes from "../components/MainNavigation.module.css";
import logo from "../assets/code.svg";
import { useState } from "react";

export default function MainNavigation() {
  const [isToggled, setIsToggled] = useState(false);
  const clickHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav>
      <div className={classes.logo}>
        <img src={logo} alt="" className={`${classes["logo-img"]}`} />
        <h1 className={`${classes["logo-heading"]}`}>
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
      <ul
        className={` ${classes["nav-list"]} ${isToggled && classes.expanded} `}
      >
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
