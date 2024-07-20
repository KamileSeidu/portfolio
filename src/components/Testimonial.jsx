import TestiominalCard from "./TestimonialCard";
import classes from "../components/Testimonial.module.css";

export default function Testimonial() {
  return (
    <div className={classes.testimonial}>
      <h1 className={classes.heading}>Testimonials</h1>
      <p className={classes.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium
        error natus, quod recusandae architecto aspernatur! At ipsam aspernatur,
        blanditiis atque exercitationem odio architecto consequuntur velit,
        nesciunt maxime doloremque tenetur!
      </p>
      <main className={classes.main}>
        <TestiominalCard />
        <TestiominalCard />
      </main>
    </div>
  );
}
