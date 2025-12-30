import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.png";
import "./footer.scss";

export function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <img src={logo} alt="Logo Kasa blanc" className="logoFooter"/>
      </Link>
      <p className="textFooter">© 2025 Kasa. All rights reserved</p>
    </div>
  );
}