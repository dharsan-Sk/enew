import { Container,Row,Col } from "react-bootstrap";
import { FaLocationDot,FaLinkedinIn,FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF} from "react-icons/fa";
import { BsTwitterX,BsInstagram } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";

function FooterSection() {
  return (
    <Container fluid="xxl" className="footer-div pt-3 wow fadeIn">
      <Container className="py-5 px-lg-5">
        <Row className="g-5 footer-row">
        <Col lg={1} >
        </Col>
          <Col lg={2} xs={12}>
            <h5 className="mb-4 link-heading">Company</h5>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/" className="linkS">
                Home
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/about" className="linkS">
                About Us
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service" className="linkS">
                Service
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/project" className="linkS">
              Products 
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/career" className="linkS">
                Career
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/contact" className="linkS">
                Blogs
              </Link>
            </p>
          </Col>
          <Col lg={5} xs={12}>
            <h5 className="mb-4 link-heading">Services</h5>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service/web" className="linkS">
                Web Development
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service/mobile" className="linkS">
              Mobile App Development
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service" className="linkS">
              Graphic design
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service/Digitalmarketing" className="linkS">
              Software Testing
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service/Graphicsdesign" className="linkS">
              WordPress development
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service/Graphicsdesign" className="linkS">
              Digitalmarketing
              </Link>
            </p>
          </Col>
             
       

          <Col lg={4} xs={12}>
            <h5 className="mb-4 GIn-heading">Get In Touch</h5>
            <p className="p-tag mb-3">
              <Row>
                <Col xs={1}>
                  <FaLocationDot className="GIn-icon me-2" />
                </Col>
                <Col xs={11}>
                  {" "}
                  287/3, Standard Towers,
                  <br />
                  Avinashi Main Road, Peelamedu, <br />
                  Coimbatore - 641 004
                </Col>
              </Row>
            </p>
            <p className="p-tag mb-3">
              <Row>
                <Col xs={1}>
                  <FaPhone className="GIn-icon me-2" />
                </Col>
                <Col xs={11}>+91- 98 40 64 26 67 </Col>
              </Row>
            </p>
            <p className="p-tag mb-4">
              <Row>
                <Col xs={1}>
                  <IoIosMail className="GIn-icon me-2" />
                </Col>
                <Col xs={11}>contact@Emergewiz.com </Col>
              </Row>
            </p>

            <div className="icon-div pt-2 d-flex">
              <button className="GIn-socialM-icon me-3 bgw">
                <a href="https://www.facebook.com/Emergewiz/">
                <FaFacebookF /></a>
              </button>
              <button className="GIn-socialM-icon me-3 bgw">
                <a href="https://x.com/Emergewiz">
                <BsTwitterX /></a>
              </button>
              <button className="GIn-socialM-icon me-3 bgw">
                <a href="https://www.instagram.com/Emergewiz_technologies/">
                <BsInstagram /></a>
              </button>
              <button className="GIn-socialM-icon bgw">
                <a href="https://www.linkedin.com/company/Emergewiz-technologies/">                
                  <FaLinkedinIn /></a>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="px-lg-5">
        <div className="copyright">
          <Row><Col lg={8} sm={12}>
         <Link className="brand-link ml-2"> 
         <Link to="/terms">
         Terms & Conditions
         </Link>
         
          </Link>  &nbsp; |   &nbsp;
         <Link className="brand-link ml-2">
<Link to="/Refund">
         Refund Policy 
         </Link>
         </Link>  &nbsp; |   &nbsp;
         <Link className="brand-link ml-2"> 
         
         <Link to="/privacy">
         Privacy Policy
         </Link>
          </Link>  &nbsp; |   &nbsp;
         <Link className="brand-link ml-2"> 
          <Link to= "/Delivery"> Delivery & Shipping </Link></Link>  &nbsp; |   &nbsp;
         <Link className="brand-link ml-2">
<Link to="/Disclaimer">
         Disclaimer
         </Link>
         </Link>  &nbsp;  </Col>
            <Col sm={12} lg={4} className="text-center md-3 ">
              <p className="mt-res">©Emergewiz,. All Right Reserved.</p>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default FooterSection;
