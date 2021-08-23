import outsourcing from "../images/Outsourcing.png";
import rectangle3 from "../images/Rectangle 29.png";
import rectangle4 from "../images/Rectangle 32.png";

function Outsourcing() {
  return (
    <div className="outsourcing">
      <div className="outsourcing-wrapper">
        <div className="outsourcing-information">
          <div>
          <div className="subheader">
          <div className="line"></div>
              <h4 className="sub-header">Outsourcing</h4>
              
            </div>
            <h3 className="description">
              As and when temporary requirement is identified <br />
              by the Client with the details pertaining to the job role, <br />
              job description, job location, etc., we will find suitable
              <br /> qualified candidates and submit the Curriculum Vitae <br />
              (CVs). <br />
            </h3>
            <h3 className="description">
              Once such candidate is qualified with a <br />
              defines-period under the sponsorship and payroll of <br />
              the Company as a Outsources employee.
            </h3>
          </div>
          <div className="image-zone">
            <div className="section4-behind1">
              <img src={rectangle4} />
            </div>
            <div className="section4-behind2">
              <img src={rectangle3} />
            </div>
            <div className="section4-image">
              <img src={outsourcing} />
            </div>
          </div>
        </div>
      </div>
      
    </div>

    
  );
}

export default Outsourcing;
