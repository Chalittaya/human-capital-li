import "./App.css";
import Recruitment from "./section/recruitment";
import WhyChooseUs from "./section/why-choose-us";
import OurServices from "./section/our-service";
import Outsourcing from "./section/outsourcing";
import RequestACallback from "./section/request-a-callback";
import Contact from "./section/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Recruitment />
      <WhyChooseUs />
      <OurServices />
      <Outsourcing/>
      <RequestACallback/>
      <Contact/>
    </div>
  );
}

export default App;
