import { useState } from "react";
import arrow from "../assets/arrow_back.png";
import "../styles/collapse.scss";

export function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDownClsp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="buttonClps">
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="Flèche ouvrir / fermer"
          className={`arrowClps ${isOpen ? "openArrow" : ""}`}
          onClick={openDownClsp}
        />
      </div>
      <div className={`descriptionClps ${isOpen ? "openArrow" : ""}`}>
        <div className="textClps">{description}</div>
      </div>
    </div>
  );
}