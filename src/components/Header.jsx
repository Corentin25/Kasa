import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.scss";

export function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" className="logoHeader" />
      </Link>
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </div>
    </nav>
  );
}
