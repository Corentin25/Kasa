import { Banner } from "../components/Banner";
import bannerHome from "../assets/Banner-home.png";

export function Home() {
  return (
    <div>
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />
    </div>
  );
}
