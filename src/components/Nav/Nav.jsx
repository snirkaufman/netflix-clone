import "./Nav.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav_container">
        <img
          className="netflix_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix_logo"
        />
        <img
          className="netflix_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEy-Hi3lntqni03_IgMHV_6nbWR5sG5EuE11oKCej1YqlHvxzo6lfyF7L_JXrJaoZIkY&usqp=CAU"
          alt="netflix_avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
