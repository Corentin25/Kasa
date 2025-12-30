import { Link } from "react-router-dom";
import "./card.scss";

export function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="imgCard" />
      <h2 className="titleCard">{title}</h2>
    </Link>
  );
}