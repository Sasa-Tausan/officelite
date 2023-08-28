import { pricingData } from "../assets/data";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const Cards = () => {
  const { handlePage, activeIndex, handleSubscription } = useContext(MyContext);
  return (
    <>
      <ul className="card-list">
        {pricingData.map((item) => {
          const { id, name, subscription, numberUsers, features } = item;
          const isActive = activeIndex === id;
          return (
            <li
              key={id}
              className={`card-item ${isActive ? "card-item-active" : ""}`}
              onClick={(event) => handleSubscription(event, id)}
            >
              <p className={`card-small-title ${isActive ? "active" : ""}`}>
                {name}
              </p>
              <div className="subscription-content">
                <h2
                  className={`subscription-title ${isActive ? "active" : ""}`}
                >
                  {subscription}
                </h2>
                <p className={`numberUsers-text ${isActive ? "active" : ""}`}>
                  {numberUsers}
                </p>
              </div>
              <ul
                className={`features-list ${isActive ? "active-opacity" : ""}`}
              >
                {features.map((item, index) => {
                  return (
                    <li key={index} className={"features-item"}>
                      {item}
                    </li>
                  );
                })}
              </ul>
              <button
                href="#"
                className={`btn btn-two ${isActive ? "btn-two-active" : ""}`}
                onClick={() => handlePage(false)}
              >
                Try for Free
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cards;
