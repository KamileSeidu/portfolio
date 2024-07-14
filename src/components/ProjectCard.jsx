// import techcare from "../assets/projectimg/TechCare.png";
import classes from "../components/ProjectCard.module.css";

export default function ProjectCard({ title, image, description }) {
  return (
    <div className={classes.card}>
      <a href="">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </div>
  );
}
