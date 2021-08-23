import section2 from "../images/MaskGroup.png";
import section2right from "../images/section2-1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function WhyChooseUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
    customPaging: (i) => (
      <div
        style={{
          width: "78px",
          border: "6px white solid",
        }}
      ></div>
    ),
  };

  return (
    <div className="why-choose-us">
      <div className="why-choose-us-wrapper">
        <div className="why-choose-us-information-wrapper">
          <Slider {...settings}>
            <div className="slide-item">
              <div className="section2-image">
                <img src="https://via.placeholder.com/1018x700" />
              </div>
              <div className="why-choose-us-information">
                <div className="co-lead-title">Why Choose Us?</div>
                <div className="description">
                  We have a professional team <br />
                  who has more than 10 years of experience
                  <br />
                  in recruitment and outsources employee services.
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="section2-image">
                <img src="https://via.placeholder.com/1018x700" />
              </div>
              <div className="why-choose-us-information">
                <div className="co-lead-title">Why Choose Us?</div>
                <div className="description">
                  We have a clear working process that ensures you a<br />
                  delivery time with responsibility and punctuality
                  <br />
                  have always been our priority.
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="section2-image">
                <img src="https://via.placeholder.com/1018x700" />
              </div>
              <div className="why-choose-us-information">
                <div className="co-lead-title">Why Choose Us?</div>
                <div className="description">
                  We always have a staff who provided consultation
                  <br />
                  and work-in progress along the way.
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
