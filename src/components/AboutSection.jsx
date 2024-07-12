import classes from "../components/AboutSection.module.css";
import kamile2 from "../assets/kamile_2.jpg";

export default function AboutSection() {
  return (
    <div className={classes.about}>
      <img src={kamile2} alt="" />
      <div className={`${classes["about-paragraph"]}`}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          reprehenderit corporis, quidem minus praesentium nihil, id excepturi
          iure tempore expedita autem quo iste officiis molestias consectetur
          cumque fuga ipsam odio. Et voluptas eveniet non molestiae soluta
          tempora corrupti ullam quod unde! Voluptatum.
        </p>
      </div>
    </div>
  );
}
