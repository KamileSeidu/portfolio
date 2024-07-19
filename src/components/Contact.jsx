import classes from "../components/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <h1>Let's Develop Together</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
        sapiente.
      </p>
      <div className={classes.form}>
        <form>
          <input type="text" placeholder="Enter your email" />
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message here!"
          ></textarea>
          <button className={classes.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
}
