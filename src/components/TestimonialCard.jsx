import classes from "../components/TestimonialCard.module.css";
import salisu from "../assets/Salis.jpg";

export default function TestiominalCard() {
  return (
    <div className={classes.card}>
      <div className={`${classes["card__image"]}`}>
        <img src={salisu} alt="" />
      </div>
      <div className={`${classes["card__content"]}`}>
        <p>
          <span>"</span> Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Reprehenderit odit quam, quia eius obcaecati rem beatae
          perspiciatis tenetur velit quidem eligendi vel dolorum explicabo.
          Ratione suscipit qui dolorem quisquam exercitationem! <span>"</span>
        </p>
        <h1>Mohammed Salisu Abubakari</h1>
        <h2>CEO, SAID Foundation Ghana</h2>
      </div>
    </div>
  );
}
