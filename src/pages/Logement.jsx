import { useParams, Navigate } from "react-router-dom";
import { Slideshow } from "../components/Slideshow";
import { Collapse } from "../components/Collapse";
import logements from "../data/logements.json";

import starFull from "../assets/star-full.png";
import starEmpty from "../assets/star-empty.png";
import "../styles/logement.scss";

export function Logement() {
  const { id } = useParams();
  const selectedLogement = logements.find((logement) => logement.id === id);
  if (!selectedLogement) {
    return <Navigate to="/error404" />;
  }

  const hostName = selectedLogement.host.name.split(" ");
  const ratingsArray = [1, 2, 3, 4, 5];

  return (
    <div>
      <Slideshow pictures={selectedLogement.pictures} />
      <section className="titles-host-rating">
        <div className="titles">
          <h1>{selectedLogement.title}</h1>
          <h2>{selectedLogement.location}</h2>
          <div className="tags">
            {selectedLogement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="hostRating">
          <div className="rating">
            {ratingsArray.map((element) => (
              <img
                key={element.toString()}
                src={parseInt(selectedLogement.rating) >= element ? starFull : starEmpty}
                alt="Étoile de note"
              />
            ))}
          </div>
          <div className="host">
            <p>{hostName[0]}<br />{hostName[1]}</p>
            <img
              src={selectedLogement.host.picture}
              alt={selectedLogement.host.name}
            />
          </div>
        </div>
      </section>
      <section className="description-equipment">
        <Collapse 
          title="Description" 
          description={selectedLogement.description}
        />
        <Collapse 
          title="Équipements" 
          description={
            <ul>
              {selectedLogement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </section>
    </div>
  );
}
