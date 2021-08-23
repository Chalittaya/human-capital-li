import section1 from "../images/section1-1.png";
import logo from "../images/LOGO1.png";
import whitebg from "../images/Ellipse 16.png";

function Recruitment() {
  
  return (
    <div className="recruitment">
      <div className="recruitment-wrapper">
        <div id="bg-head">
          <div className="logo-image">
            <img src={logo} />
          </div>
          <h1> Human Capital Hub (Thailand) Limited</h1>
        </div>

        <div className="recruitment-information-wrapper">
          <div className="recruitment-information">
            <h5 className="lead-title">
              Recruitment Process <br /> Outsourcing
            </h5>

            <h3 className="excerp">
              “Our solutions are built around your requirement.”
              <br />
              We always have a staff who provided consultation and
              work-in-progress along the way.
            </h3>

            <a href="#" className="request-btn">
              Request a callback
            </a>

          </div>
        </div>
      </div>

      <div className="floating-image">
        <img src={whitebg} />
      </div>
      <div className="floating-image">
        <img src={section1} />
      </div>
    </div>
  );
}

export default Recruitment;
