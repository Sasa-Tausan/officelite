import { logo } from "../assets/images";
import { MyContext } from "./MyContext";
import { useContext } from "react";
import HeroSignUp from "./HeroSignUp";
import Countdown from "./Countdown";
import Form from "./Form";

const SignUpPage = () => {
  const { handlePage } = useContext(MyContext);
  return (
    <div className="container container-sign-up">
      <header className="header-sign-up">
        <img
          src={logo}
          alt="Officelite company logo"
          className="logo-image "
          onClick={() => handlePage(true)}
        />
      </header>
      <main>
        <HeroSignUp />
        <Countdown />
        <Form />
      </main>
      <footer className="footer-sign-up"></footer>
    </div>
  );
};
export default SignUpPage;
