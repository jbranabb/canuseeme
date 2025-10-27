import { Element } from "react-scroll"
import Projects from "../pages/work/Projects"
import Headers from "../ui/Header"
import Footer from "../ui/footer"


export default function Work() {
  return (
    <>
      <Element name="work">
        <Headers />
        <Projects />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  )
}
