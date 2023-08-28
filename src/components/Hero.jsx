import { illustrationCharts } from "../assets/images";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const Hero = () => {
  const { handlePage } = useContext(MyContext);

  return (
    <section className="hero-section">
      <img src={illustrationCharts} alt="" className="hero-img" />

      <article className="hero-content">
        <h1 className="main-title">
          A simple solution to complex tasks is coming soon
        </h1>
        <p className="hero-content-text">
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </p>
        <button className="btn-one" onClick={() => handlePage(false)}>
          Get Started
        </button>
      </article>
    </section>
  );
};
export default Hero;
