import { Fragment } from "react";
import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import logements from "../data/logements.json";
import bannerHome from "../assets/Banner-home.png";
import "../styles/home.scss";

export function Home() {
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
