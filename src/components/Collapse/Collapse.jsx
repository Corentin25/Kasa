import { useState } from "react";
import arrow from "../../assets/arrow_back.png";
import "./collapse.scss";

export function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDownClsp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="buttonClps" onClick={openDownClsp}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="Flèche ouvrir / fermer"
          className={`arrowClps ${isOpen ? "openArrow" : ""}`} 
        />
      </div>
      <div className={`descriptionClps ${isOpen ? "openArrow" : ""}`}>
        <div className="textClps">{children}</div>
      </div>
    </div>
  );
}