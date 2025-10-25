import { Element } from "react-scroll";
import Headers from "../ui/Header";
import Welcome from "../pages/Home/Welcome";
import Journeys from "../pages/Home/Journeys";
import TechStack from "../pages/Home/Techstack";
import Contribusion from "../pages/Home/Contribution";
import Footer from "../ui/footer";
import SectionFooterAbout from "../ui/SectionFooterAbout";

export default function Home() {
  return (
    <>
      <Element name="welcome">
        <Headers />
        <Welcome />
      </Element>
      <Element name="journey">
        <Journeys />
      </Element>
      <Element name="techstack">
        <TechStack />
      </Element>
      <Element name="gitub">
        <Contribusion />
      </Element>
      <Element name="SectionFooterAbout">
        <SectionFooterAbout />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  )
}
