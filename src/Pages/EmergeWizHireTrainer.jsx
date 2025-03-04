import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import "../CSS/Emergewiztraining.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Newsletter from "../Section/NewsletterSec";
import ContactPopup from "../Section/ContactPopup";
import HeroSection from "../Section/HeroSection";
import AccordionSection from "../Section/AccordionSection";
import { Card } from "react-bootstrap";
import word from "../Images/newsletter.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AI from "../Images/1(1).png"
import BUILDERS from "../Images/2(1).png"
import CIE from "../Images/3(1).png"
import CIT from "../Images/4(1).png"
import KEC from "../Images/5(1).png"
import PSG from "../Images/6(1).png"
import SNS from "../Images/7(1).png"
import SRI from "../Images/8(1).png"
import VCW from "../Images/9.png"


export default function EmergeWizHireTrainer() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  },
   [pathname]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 900 
  };
    let accord = [
    {
      question: "What is corporate training?",
      answer: "Corporate training involves teaching employees specific skills or knowledge to improve performance and productivity.",
    },
    {
      question: "Do you offer online training options?",
      answer: " Yes, Emergewiz provides online training options for flexible learning and development opportunities.",
    },
    {
      question: "Are your trainers experienced and qualified?",
      answer: "Yes, highly experienced professionals with expertise in delivering effective training programs.",
    },
    {
      question: "Which is the best corporate training company in Coimbatore?",
      answer: "Emergewiz stands out as the premier choice for corporate training in Coimbatore.",
    },
    {
      question: "How can we get started with booking a training program?",
      answer: "Contact us via website or phone to discuss your needs and schedule a program.",
    },

  ]

  return (
    <div className="bg-white ">
      <HeroSection option="CORPORATE" />
      <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
        <Container className="px-lg-5 ">
          <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">
            <h2 className="Service-sub-title mt-5 cb">
              Our corporate training in Coimbatore
            </h2>
            <p className="mx-5 lh-base text-start mt-4">
              Emergewiz focuses on delivering quality corporate training  in Coimbatore to meet the industry and organizational requirements.
              Emergewiz has a team of over 15 years experienced corporate trainers and facilitates both onsite and off site training programs
              in India. We have been providing effective corporate training
              services for over a decade which means businesses will receive comprehensive support to enhance their workforce capabilities. </p>
            <p className="mx-5 lh-base text-start">
              Our corporate training in Coimbatore uses state-of-the-art training methods backed by the latest industry research and best practices.
              This ensures that participants not only gain knowledge but also practical skills that can be immediately applied in their roles.
              We use a blend of interactive workshops, hands-on activities, and real-world case studies to create an engaging and effective
              learning environment. Additionally, our post-training support and follow-up programs help reinforce learning and track progress,
              ensuring long-term benefits for both employees and the organization.
              Join us at Emergewiz and take the first step towards empowering your workforce with essential skills and knowledge.</p>

            <h3 className="mt-5 mb-5 cb">Why do you need corporate training in Coimbatore?
            </h3>

            <Row className='g-4 equal-cols'>


              <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.3s">
                <Card className='service-item '>
                  <Card.Body className='card-body'>
                    <Card.Text className="text-justify">
                      Corporate training is essential for organizations to enhance the skills, knowledge,
                      and productivity of their employees. It serves multiple purposes, starting with improving
                      the proficiency of employees in their current roles. Through targeted training programs,
                      employees can learn new techniques, stay updated with industry trends, and master the use
                      of new technologies or tools relevant to their job functions.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.3s">
                <Card className='service-item '>
                  <Card.Body className='card-body'>
                    <Card.Text className="text-justify">
                      Corporate training in Coimbatore fosters a culture of continuous learning within the organization.
                      It encourages employees to strive for personal and professional growth, which in turn boosts morale
                      and job satisfaction. By investing in training, companies
                      demonstrate their commitment to the development and well-being of their workforce, which can lead to higher employee retention rates.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.3s">
                <Card className='service-item '>
                  <Card.Body className='card-body'>
                    <Card.Text className="text-justify">
                      Corporate training in Coimbatore helps organizations stay competitive in a rapidly evolving marketplace. It equips employees with the skills needed to adapt to changes, innovate, and maintain high performance standards. Ultimately, effective corporate tr
                      aining not only improves individual employee capabilities but also contributes to the overall success and
                      resilience of the organization.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
            <Row>
              <h3 className="mt-5 mb-5  cb">Why Choose Corporate Training in  Coimbatore?
              </h3>
              <Col
                sm={12}
                md={6}
                lg={6}><p className="mt-5"> <img src={word} alt="" className="w100" /></p></Col>
              <Col
                sm={12}
                md={6}
                lg={6}>
                <Row>
                  <h4 className="mt-5 mb-3 cb">Expert Trainers
                  </h4>
                  <p className="text-justify">Our team of expert corporate trainers at Emergewiz brings a wealth of experience and industry knowledge to every
                    corporate training session. They are adapt at transforming theoretical knowledge into practical skills that students
                    and staff can apply in real-world scenarios. Our Corporate trainers in coimbatore are passionate about education and
                    are committed to helping participants achieve their full potential.
                  </p>
                </Row>
                <Row>
                  <h4 className="mt-3 mb-4 cb">Online Corporate training in Coimbatore
                  </h4>
                  <p className="text-justify">
                    We offer Online Corporate Training in Coimbatore for customized programs focused on essential skills.
                    Our expert trainers provide flexible learning through an easy-to-use online platform. Whether your team needs
                    training, we support you every step of the way. Empower your workforce with convenient, high-quality training that
                    fits their schedule. Partner with Emergewiz for effective Online Corporate Training in Coimbatore.
                  </p>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                sm={12}
                md={6}
                lg={6}>
                <h4 className="mt-5 mb-4 cb">Customized Corporate Training Programs
                </h4>
                <Row><p className="text-justify">We understand that every institution and workplaces has unique needs and goals. That's why we offer customized
                  corporate training programs that are tailored to meet the specific requirements of your institution. Whether you need
                  training in  technical skills, or soft skills, we work closely with you to develop a program that aligns with your
                  objectives and enhances the capabilities of your students and staff.
                </p></Row>
                <Row><p className="text-justify">Our Corporate training curriculum is continuously updated to reflect the latest industry trends and advancements.
                  We ensure that our content is relevant and aligned with current job market demands. By providing up-to-date training,
                  we help students and staff stay ahead of the curve and be better prepared for their professional journeys.Emergewiz
                  has a proven track record of delivering successful training programs to institutions and Workplaces in Coimbatore.
                </p></Row>
                <Row><p className="text-justify">Our clients have seen significant improvements in student performance, staff productivity,
                  and overall institutional success after participating in our corporate  training in coimbatore. We are proud
                  of the positive feedback we have received and the lasting impact our corporate training has had on educational
                  institutions.
                </p></Row>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={6}><p className="mt-5"><img src={word} alt="" className="mt-5 w100" /></p> </Col>
            </Row>
            <h2 className="Service-sub-title mt-5">
              What are the benefits of our Corporate training in Coimbatore?

            </h2>


            <p className="mycard mx-3 lh-base text-start mt-3 h150 mt-4" >
              <Row>
                <Col sm={12}
                  md={6}
                  lg={6}><ul>
                    <Row >
                      <li >Live, interactive sessions led by experts.</li>
                    </Row>
                    <Row>
                      <li>Convenient for employees.</li>
                    </Row>
                    <Row>
                      <li>Curriculum designed with learner focus.</li>
                    </Row>
                    <Row>
                      <li> Hands-on projects with real-world challenges.</li>
                    </Row>
                    <Row>             <li>Assessments across diverse skill areas.</li>
                    </Row></ul>

                </Col>
                <Col sm={12}
                  md={6}
                  lg={6}>
                  <ul>
                    <Row>         <li> Team building opportunities.</li>
                    </Row>
                    <Row>             <li>Cost-effective training solutions.</li>
                    </Row>
                    <Row>             <li>Customized curriculum to suit your needs.</li>
                    </Row>
                    <Row>            <li>Support and management of queries post-training.</li>
                    </Row>
                    <Row>            <li> Regular feedback to track training progress effectively.</li>
                    </Row></ul>
                </Col>
              </Row>

            </p>

          </div>
          <div className="text-center ">
            <h3 className="mt-5 mb-5 cb">Specially crafted for all your Corporate training needs
            </h3>
            <Table className="mb-5">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>College</th>
                  <th>Title of  Corporate training program</th>
                  <th>Program conducted by </th>
                </tr>
              </thead>
              <tbody>
                <tr clssName="table">
                  <td className="custom-table">1</td>
                  <td className="custom-table">Sri Eashwar College of Engineering</td>
                  <td className="custom-table">Java Fullstack
                  </td>
                  <td className="custom-table">Raj Seker</td>
                </tr>
                <tr clssName="table">
                  <td className="custom-table">2</td>
                  <td className="custom-table">Avinashilingam University</td>
                  <td className="custom-table">python full stack, React, Angular
                  </td>
                  <td className="custom-table">Raj Seker</td>
                </tr>
                <tr clssName="table">
                  <td className="custom-table">3</td>
                  <td className="custom-table">
                    SNS Institutions
                  </td>
                  <td className="custom-table">Flutter , Android</td>
                  <td className="custom-table">Raj Seker</td>
                </tr>
                <tr clssName="table">
                  <td className="custom-table">4</td>
                  <td className="custom-table">
                    PSG Polytechnic College
                  </td>
                  <td className="custom-table"> Android
                  </td>
                  <td className="custom-table">Raj Seker</td>
                </tr>
                <tr clssName="table">
                  <td className="custom-table">5</td>
                  <td className="custom-table">Coimbatore Institute of Technology</td>
                  <td className="custom-table">Android, Python</td>
                  <td className="custom-table">Raj Seker</td>
                </tr>
                <tr clssName="table">
                  <td className="custom-table">6</td>
                  <td className="custom-table">Coimbatore Institute of Engineering and Technology</td>
                  <td className="custom-table">Data Science</td>
                  <td className="custom-table">Raj Seker</td>
                </tr>
                <tr clssName="table">
                  <td className="custom-table">7</td>
                  <td className="custom-table">Builders Engineering College</td>
                  <td className="custom-table"> MERN Stack
                  </td>
                  <td className="custom-table">Raj Seker</td>
                </tr>
                <tr clssName="table">
                  <td className="custom-table">8</td>
                  <td className="custom-table">Vellalar College for women</td>
                  <td className="custom-table"> Android
                  </td>
                  <td className="custom-table">Raj Seker</td>
                </tr>
                <tr clssName="table">
                  <td className="custom-table">9</td>
                  <td className="custom-table">Kongu Engineering College</td>
                  <td className="custom-table">Mern Stack</td>
                  <td className="custom-table">Raj Seker</td>
                </tr>

              </tbody>
            </Table>
            <div className="mb-5 background-gray"> 
              <Slider {...settings}>
                 <div className="border-white">
                  <h3 ><img src={AI} alt=""  className="img p-5"/></h3>
                </div>
                 <div className="border-white">
                <h3 ><img src={BUILDERS} alt=""  className="img p-5"/></h3>
                </div>
                 <div className="border-white">
                  <h3 ><img src={CIE} alt="" className="img p-5" /></h3>
                 
                </div>
                 <div className="border-white">
                  <h3 ><img src={CIT} alt="" className="img p-5" /></h3>
                 
                </div>
                 <div className="border-white">
                  <h3 ><img src={KEC} alt="" className="img p-5" /></h3>
                 
                </div>
                 <div className="border-white">
                  <h3 ><img src={PSG} alt="" className="img p-5" /></h3>
                 
                </div>
                 <div className="border-white">
                  <h3 ><img src={SNS} alt="" className="img p-5" /></h3>
                 
                </div>
                 <div className="border-white">
                  <h3 ><img src={SRI} alt="" className="img p-5" /></h3>
                 
                </div>
                 <div className="border-white">
                  <h3 ><img src={VCW} alt="" className="img p-5" /></h3>
                 
                </div>
              </Slider>
            </div>

            <Row className="g-4 equal-cols myweb text-start mb-5">

              <Col
                sm={12}
                md={12}
                lg={6}
                className={`animated wow zoomIn SEO-Optimization`}
              >
                <Card className="service-item h-100">
                  <Card.Body className="card-body">
                    <Card.Title className="mb-3">Our Corporate Training Clients
                    </Card.Title>
                    <Card.Text>Emergewiz is the best Software Development Company in Coimbatore serves diverse corporate clients, offering tailored training solutions that empower teams, foster innovation, and drive organizational success and growth.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                sm={12}
                md={12}
                lg={6}
                className={`animated wow zoomIn SEO-Optimization`}
              >
                <Card className="service-item h-100">
                  <Card.Body className="card-body">
                    <Card.Title className="mb-3">Ready to be a part of the Best Corporate Training company in Coimbatore?</Card.Title>
                    <Card.Text>Connect with us today to organize corporate training programs for your team in Coimbatore and across districts. Give your team an opportunity to learn and develop their soft and behavioral skills from the best and most experienced professional trainers and facilitators.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </div>

        </Container>
      </Container>

      <AccordionSection faq={accord} />
      <ContactPopup />

      <Newsletter />

    </div>
  );
}


