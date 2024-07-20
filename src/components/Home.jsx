import classes from "./Home.module.css";
import MainNavigation from "./MainNavigation";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "./footer/Footer";

export default function HomePage() {
  return (
    <>
      <section className={classes.container}>
        <MainNavigation />
        <Hero />
        <AboutSection />
        <Skills />
        <Projects />
        <Testimonial />
        <Contact />
      </section>
      <Footer />
    </>
  );
}
