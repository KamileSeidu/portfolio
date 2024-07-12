import classes from "../components/SkillCard.module.css";

export default function SkillCard({ image, name }) {
  return (
    <div className={classes.card}>
      <img src={image} alt="" />
      <h1>{name}</h1>
    </div>
  );
}
