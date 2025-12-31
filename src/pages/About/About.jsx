import { Fragment } from "react";
import { Banner } from "../../components/Banner/Banner";
import { Collapse } from "../../components/Collapse/Collapse";
import aboutData from "../../data/aboutData.json";
import bannerAbout from "../../assets/Banner-about.jpg";
import "./about.scss";

export function About() {
  return (
    <Fragment>
      <Banner image={bannerAbout} />
      <section className="collapse">
        {aboutData.map((dataClps) => (
          <Collapse key={dataClps.id} id={dataClps.id} title={dataClps.title}>
            <p>{dataClps.description}</p>
          </Collapse>
        ))}
      </section>
    </Fragment>
  );
}
