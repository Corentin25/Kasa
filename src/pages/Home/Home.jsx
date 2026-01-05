import { Fragment, useState, useEffect } from "react";
import { Banner } from "../../components/Banner/Banner";
import { Card } from "../../components/Card/Card";
import bannerHome from "../../assets/Banner-home.jpg";
import "./home.scss";

export function Home() {

  const [logements, setLogements] = useState([])

  useEffect (() => {
    fetch("/logements.json")
    .then((response) => response.json())
    .then((data) => setLogements(data))
    .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);

  return (
    <Fragment>
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </Fragment>
  );
}
