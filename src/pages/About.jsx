import { Banner } from "../components/Banner";
import { Collapse } from "../components/Collapse";
import aboutData from "../data/aboutData.json";
import bannerAbout from "../assets/Banner-about.png";

import "../styles/about.scss";

export function About() {
  return (
    <div>
      <Banner image={bannerAbout} />
      <section className="collapse">
        {aboutData.map((dataClps) => (
          <Collapse
            key={dataClps.id}
            id={dataClps.id}
            title={dataClps.title}
            description={dataClps.description}
          />
        ))}
      </section>
    </div>
  );
}
