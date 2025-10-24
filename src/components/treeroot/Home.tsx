import { Element } from "react-scroll";
import Headers from "../ui/Header";
import Welcome from "../pages/Home/Welcome";
import Journeys from "../pages/Home/Journeys";
import TechStack from "../pages/Home/Techstack";
import Contribusion from "../pages/Home/Contribution";
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
    </>
  )
}
