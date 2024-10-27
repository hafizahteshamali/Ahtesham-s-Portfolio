/* eslint-disable react/prop-types */
import { IoLogoFacebook } from "react-icons/io5";
import Button from "../../Components/Common/Button/Button";
import "./ContactUs.css";
import "./responsive.css"
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactUs = ({data}) => {
  const {heading1, span, heading2, description, email, contactNo} = data;
  return (
    <section id="contact" className="contactUs">
      <div className="container">
        <div className="contactUs_wrapper">
            <div className="form-wrapper">
              <form>
                <input type="text" id="fullName" placeholder="Your name" />
                <input type="email" id="emailAddress" placeholder="Email" />
                <input type="text" id="websiteName" placeholder="Your website (If exists)" />
                <textarea id="message" placeholder="How can I help?*"></textarea>
                <ul>
                  <li><Button text="Get in Touch"/></li>
                  <li><a href="https://www.facebook.com/profile.php?id=100034668692703"><IoLogoFacebook /></a></li>
                    <li><a href="https://www.linkedin.com/in/hafiz-ahtesham-ali-b1301b290/"><FaLinkedin /></a></li>
                    <li><a href="mailto:hafizahteshamali363617@gmail.com"><SiGmail /></a></li>
                    <li><a href="https://wa.me/+923308419436"><FaPhoneAlt /></a></li>
                </ul>
              </form>
            </div>

            <div className="content-wrapper">
              <h3>{heading1} <span>{span}</span> {heading2}</h3>
              <p>{description}</p>
              <h5>{email}</h5>
              <h5>{contactNo}</h5>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
