import { useParams, Navigate } from "react-router-dom";
import { Slideshow } from "../components/Slideshow";
import logements from "../data/logements.json";
import "../styles/logement.scss";

export function Logement() {
  const { id } = useParams();

  const selectedLogement = logements.find((logement) => logement.id === id);

  if (!selectedLogement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement-page">
      <Slideshow pictures={selectedLogement.pictures} />
    </div>
  );
}
