import { Banner } from "../components/Banner";
import bannerAbout from "../assets/Banner-about.png";

export function About() {
  return (
    <div>
      <Banner image={bannerAbout} />
    </div>
  );
}
