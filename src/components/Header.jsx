import "../styles/header.scss";

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export function Header() {
  return (
    <nav>
      <img src={logo} alt="Logo de Kasa" />
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </div>
    </nav>
  );
}
