import { useState } from "react";
import { MyContext } from "./components/MyContext";
import { Cards, Countdown, Form, Header, Hero, HeroSignUp } from "./index";
import { patternOne } from "./assets/images";

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handlePage = (boll) => {
    setIsHomePage(boll);
    setActiveIndex(0);
    console.log("success");
  };

  const handleSubscription = (event, index) => {
    event.preventDefault();
    setActiveIndex(index);
    setIsSelectOpen(false);
  };

  const toggleSelect = (event, boll) => {
    event.preventDefault();
    setIsSelectOpen(!boll);
  };
  return (
    <MyContext.Provider
      value={{
        isHomePage,
        handlePage,
        activeIndex,
        handleSubscription,
        isSelectOpen,
        toggleSelect,
      }}
    >
      <div
        className={`container ${
          isHomePage ? "container-home" : "container-sign-up"
        }`}
      >
        {isHomePage && <img src={patternOne} alt="" className="pattern-one" />}
        <Header />
        <main className={`${isHomePage ? "main-home" : "main-sign-up"}`}>
          {isHomePage ? <Hero /> : <HeroSignUp />}
          {isHomePage && <Cards />}
          {isHomePage || <Countdown />}
          {isHomePage || <Form />}
        </main>
        <footer
          className={`footer ${isHomePage ? "footer-home" : "footer-sign-up"}`}
        >
          {isHomePage && <Countdown />}
        </footer>
      </div>
    </MyContext.Provider>
  );
};
export default App;
