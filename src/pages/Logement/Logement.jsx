import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import { Tags } from "../../components/Tags/Tags";
import { Rating } from "../../components/Rating/Rating";
import { Host } from "../../components/Host/Host";
import { Collapse } from "../../components/Collapse/Collapse";
import { Error404 } from "../Error404/Error404";
import logements from "../../data/logements.json";
import "./logement.scss";

export function Logement() {
  const { idLogement } = useParams();
  const selectedLogement = logements.find((logement) => logement.id === idLogement);
  
  if (!selectedLogement) {
    return <Error404 />;
  }

  return (
    <Fragment>
      <Slideshow pictures={selectedLogement.pictures} />
      <section className="titles-host-rating">
        <div>
          <h1>{selectedLogement.title}</h1>
          <h2>{selectedLogement.location}</h2>
          <Tags tags={selectedLogement.tags} />
        </div>
        <div className="hostRating">
          <Rating rating={selectedLogement.rating} />
          <Host host={selectedLogement.host}/>
        </div>
      </section>
      <section className="description-equipment">
        <Collapse title="Description">{selectedLogement.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {selectedLogement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </Fragment>
  );
}