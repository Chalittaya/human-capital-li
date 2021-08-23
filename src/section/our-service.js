import section3 from "../images/Recruitment.png";
import rectangle1 from "../images/Rectangle 30.png";
import rectangle2 from "../images/Rectangle 31.png";

function OurServices() {
  return (
    <div className="our-services">
      <div className="our-services-wrapper">
        <div className="our-services-header">
          <h2 className="header">
            <span>Our Services</span>
          </h2>
        </div>

        <div className="our-services-information">
          <div className="image-zone">
            <div className="section3-behind1">
              <img src={rectangle1} />
            </div>
            <div className="section3-behind2">
              <img src={rectangle2} />
            </div>
            <div className="section3-image">
              <img src={section3} />
            </div>
          </div>

          <div>
            <div className="subheader">
              <h4 className="sub-header">Recruitment</h4>
              <div className="line"></div>
            </div>
            <h3 className="description">
              As and when the permanent manpower
              <br />
              requirement is identified by the client with the details
              <br /> pertaining to the job role, job description, job location,
              <br /> etc., we will find suitable qualified candidates and
              <br />
              submit the Curriculum Vitae (CVs).
              <br />
            </h3>
            <h3 className="description">
              We will also organize, personal interview and <br /> other
              formalities under the recruitment process.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
