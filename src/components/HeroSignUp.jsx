import { useContext } from "react";
import { MyContext } from "./MyContext";

const HeroSignUp = () => {
  const { isHomePage } = useContext(MyContext);
  return (
    <article className="hero-content">
      <h1 className="main-title main-title-sign-up">
        Work smarter. Save time.
      </h1>
      <p
        className={`hero-content-text ${
          !isHomePage ? "hero-content-text-sign-up" : ""
        }`}
      >
        Easily manage your projects. Get on the list and receive in-app perks
        available only to early subscribers. We are moving into final
        development and getting ready for official launch soon.
      </p>
    </article>
  );
};
export default HeroSignUp;
