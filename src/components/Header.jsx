import { logo } from "../assets/images";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const Header = () => {
  const { isHomeOpen, handlePage } = useContext(MyContext);
  return (
    <header className={`${isHomeOpen || "header-sign-up"}`}>
      <img
        src={logo}
        alt="Officelite company logo"
        className="logo-image"
        onClick={() => handlePage(true)}
      />
    </header>
  );
};
export default Header;
