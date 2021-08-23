import bottomlogo from "../images/botton-logo.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-infomation">
          <div className="contact-header">Contact Us</div>
          <div className="contact-address-head">
          Address
          </div>
          <div className="contact-address">
            : 936 M. 4 Soi. Sriboonruang , Teparak Road, T. Teparak, A.Muang,
            Samutprakarn 10270
            <br />: +66(0)2-758 0465, +66(0)99 259 3693 , +66(0)81 849 1452 :
            Pakanan@humancapitalhub.co
          </div>
        </div>
        <div className="bottom-logo-image">
          <img src={bottomlogo} />
        </div>
      </div>
    </div>
  );
}
export default Contact;
