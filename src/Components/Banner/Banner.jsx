/* eslint-disable react/prop-types */
import "./Banner.css";
import "./responsive.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Banner = ({data}) => {
  const {heading1, heading2, heading3, span1Heading, span2Heading, para, imgUrl} = data;
  return (
    <section className="Banner">
      <div className="container">
        <div className="banner-wrapper">
            <div className="text-wrapper">
                <h2> {heading1}<span> {span1Heading}</span> {heading2} <span>{heading3}</span> <span>{span2Heading}</span></h2>
                <p>{para}</p>

                <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=100034668692703"><IoLogoFacebook /></a></li>
                    <li><a href="https://www.linkedin.com/in/hafiz-ahtesham-ali-b1301b290/"><FaLinkedin /></a></li>
                    <li><a href="mailto:hafizahteshamali363617@gmail.com"><SiGmail /></a></li>
                    <li><a href="https://wa.me/+923308419436"><FaPhoneAlt /></a></li>
                </ul>
            </div>
            <div className="img-wrapper">
                <img src={imgUrl} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
