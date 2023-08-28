import { optionSubscriptions } from "../assets/data";
import {
  iconArrowDown,
  iconArrowUp,
  iconCheck,
  iconError,
} from "../assets/images";
import { useContext, useState } from "react";
import { MyContext } from "./MyContext";

const Form = () => {
  const {
    isSelectOpen,
    toggleSelect,
    activeIndex,
    handleSubscription,
    isHomeOpen,
  } = useContext(MyContext);

  const [userMail, setUserMail] = useState("");
  const [error, setError] = useState(false);

  const handleUserMail = (event) => {
    setUserMail(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userMail.includes("@")) {
      alert("You have been successfully added to the list");
      setError(false);
      setUserMail("");
    } else {
      setError(true);
    }
  };

  const activeOption = optionSubscriptions[activeIndex];
  const { name, subscription } = activeOption;
  return (
    <form className={`${isHomeOpen || "form-sign-up"}`}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        maxLength={40}
      />

      <div
        className={`email-input-container ${
          error ? "email-input-container-error" : ""
        }`}
      >
        <input
          className={error ? "email-input-error" : ""}
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={userMail}
          onChange={handleUserMail}
          required
        />
        {error && <img src={iconError} alt="" className="error-icon" />}
      </div>

      <div className="custom-select">
        <button
          className="select-button"
          role="combobox"
          aria-labelledby="select button"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-controls="select-dropdown"
          onClick={(event) => toggleSelect(event, isSelectOpen)}
        >
          <p className="option-item">
            {name} <span>{subscription}</span>
          </p>
          <img
            src={isSelectOpen ? iconArrowUp : iconArrowDown}
            alt="icon arrow"
            className="icon-arrow-down"
          />
        </button>
        {isSelectOpen && (
          <ul className="options-list">
            {optionSubscriptions.map((item) => {
              const { id, name, subscription } = item;
              const isActive = activeIndex === id;
              return (
                <li
                  key={id}
                  className="option-content"
                  onClick={(event) => handleSubscription(event, id)}
                >
                  <p className="option-item">
                    {name} <span>{subscription}</span>
                  </p>
                  {isActive && <img src={iconCheck} alt="icon check" />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        maxLength={20}
      />
      <input
        type="text"
        name="company"
        id="company"
        placeholder="Company"
        maxLength={40}
      />
      <button
        type="submit"
        className="btn-one"
        onClick={(event) => handleSubmit(event)}
      >
        Get on the list
      </button>
    </form>
  );
};
export default Form;
