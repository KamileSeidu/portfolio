import classes from "../components/Skills.module.css";
import { SKILLS } from "../data/skill";
import SkillCard from "./SkillCard";

const skillList = SKILLS.map((item, index) => (
  <SkillCard key={index} name={item.name} image={item.image} />
));

export default function Skills() {
  return (
    <div className={classes.skills}>
      <h1>Technical Skills</h1>
      <div className={`${classes["skill-cards"]}`}>{skillList}</div>
    </div>
  );
}
