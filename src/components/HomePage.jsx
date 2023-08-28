import { Header, Cards, Countdown } from "../index";
const HomePage = () => {
  return (
    <div className="container container-home">
      <Header />
      <main>
        <Cards />
      </main>
      <footer className="footer-home">
        <Countdown />
      </footer>
    </div>
  );
};
export default HomePage;
