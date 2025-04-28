import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Section2 from "./Pages/Section2";
import Card from "./Pages/Card";
import Timeline from "./Pages/Timeline";
import FaqAccordion from "./Pages/FaqAccordion";
import OurTeam from "./Pages/OurTeam";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <Home />
      <Section2 />
      <Card />
      <Timeline />
      <FaqAccordion />
      <OurTeam />
      <Footer />
    </>
  );
}

export default App;
