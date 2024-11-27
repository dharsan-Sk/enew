import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Newsletter from "../Section/NewsletterSec";
import ContactPopup from "../Section/ContactPopup";
import HeroSection from "../Section/HeroSection";
import AccordionSection from "../Section/AccordionSection";
import { Card } from "react-bootstrap";
import FoodDukekey from "../JSON/FoodDukekey.json"
import word from "../Images/newsletter.png"
import { Carousel } from 'react-bootstrap';
import food from "../JSON/FoodDukefood"
import { SiMongodb } from "react-icons/si";
import "../CSS/Section.css";
import { FaQuoteLeft } from "react-icons/fa";


export default function FoodDuke() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const testimonials = [
        {
            id: 1,
            content: 'Food Duke has revolutionized the way we handle our deliveries. The food delivery software is easy to use, and the real-time tracking feature has improved our efficiency. Our customers love the seamless experience, and we have seen a noticeable increase in repeat orders!',
            author: 'Sarah K., Restaurant Owner',
            path: './assets/team-2.jpg'
        },
        {
            id: 2,
            content: 'As a small business owner, Food Duke’s food delivery software has been a game-changer. It helped us integrate multiple locations and manage orders smoothly. The custom branding options made our business stand out, and the customer support has been fantastic! I highly recommend them as a leading food delivery app development company.',
            author: 'Rajesh P., Small Business Owner',
            path: './assets/team-1.jpg'
        },
        {
            id: 3,
            content: 'Launching a food delivery business was a challenge, but Food Duke simplified the process. Their food delivery software development company in Coimbatore provided us with scalable solutions that allowed us to grow quickly across multiple cities. The driver panel and GPS tracking features have been especially useful in keeping our operations smooth',
            author: 'Anjali S., Entrepreneur',
            path: './assets/team-3.jpg'
        },
       
    ];
    let accord = [
        {
            question: "What makes Food Duke's food delivery software unique?",
            answer: "Food Duke offers a robust and user-friendly platform designed to simplify food delivery management. With features like real-time order tracking, multiple payment options, and restaurant integration across various locations, we provide a comprehensive solution for both businesses and customers.",
        },
        {
            question: "Is the software customizable for my brand?",
            answer: "Absolutely! Food Duke’s software allows customization of logos, themes, and other brand elements, so your business can stand out with a personalized identity while providing a seamless customer experience.",
        },
        {
            question: "What kind of support does Food Duke offer?",
            answer: "We offer complete support, including technical assistance, training, and ongoing updates. Our team is available to ensure that your software runs smoothly and any issues are resolved quickly.",
        },
        {
            question: "Can I track deliveries in real time with Food Duke?",
            answer: "Yes, our software includes GPS-based real-time tracking for both customers and drivers. This ensures transparency, allowing customers to follow their orders and drivers to navigate deliveries efficiently.",
        },
        {
            question: " What is the top food delivery app development company?",
            answer: "Food Duke is the best food delivery app development company, offering cutting-edge solutions tailored to meet the needs of restaurants, small businesses, and startups. Our platform features real-time tracking, secure payments, multi-location integration, and customizable branding, making it the ideal choice for businesses looking to streamline their delivery operation",
        },
    ]



    console.log(accord)
    return (
        <div className="bg-white">
            <HeroSection option="FoodDuke" />
            <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
                <Container className="px-lg-5 ">
                    <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">

                        <div>
                            <Row>
                                <Col
                                    sm={12}
                                    md={12}
                                    lg={6} className="mt-5">
                                    <img src={word} alt="" className="w100" />
                                </Col>
                                <Col
                                    sm={12}
                                    md={12}
                                    lg={6} className="">
                                    <div className="mt-5">
                                        <h3 className="mt-3">  Food Delivery App Development Company
                                        </h3>
                                        <p className="text-justify p-3 mt-4 p-lh">
                                            At Food Duke, we empower people to order food in a simpler, faster, and more efficient way through our advanced app technology. We are one of the Best food delivery app development company in Coimbatore that offer convenience, variety, and quality applications to benefit our users. Whether for a delicious meal, takeaways, or discovering new vendors, our platform helps you find the menus, manage all your orders in real time, and benefit from fast and efficient delivery services. Some of the features we implemented on the platform are convenient for the user regarding dietary habits. Being an experienced food app development company in Coimbatore, we ensure that we have created solutions that suit the food restaurants, food chains, and delivery services. We boast of applications that are effective, secure, and developed with the user in mind.
                                        </p>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </div>

                    <div className="text-center ">
                        <h3 className="mt-5 mb-5">Key Features of our Food Delivery App Development</h3>
                        <Row className="g-4 equal-cols myweb text-start mb-5">
                            {FoodDukekey.map((service, index) => (
                                <Col
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    key={index}
                                    className={`animated wow zoomIn SEO-Optimization`}
                                    data-wow-delay={service.delay}
                                >
                                    <Card className="service-item h-100">
                                        <Card.Body className="card-body">
                                            <Card.Title className="mb-3">{service.title}</Card.Title>
                                            <Card.Text>{service.text}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <h3 className="text-center ">Explore Our Food Delivery Software 3 Unique Panels with Customer-Centric Features
                            </h3>

                            <Col xs={12} md={4} className="mt-5">
                                <p className="mycard mx-3 lh-base text-start mt-3 h-100" >
                                    <h3 className="text-center mb-3">Customer Panel
                                    </h3>
                                    <ul>
                                        <li>
                                            <h5 className="cb">Quick Login
                                            </h5>
                                            <p>Streamlined login options to ensure you can place your order without delay.
                                            </p>
                                        </li>
                                        <li>
                                            <h5 className="cb">Easy Search
                                            </h5>
                                            <p>Advanced search filters and categories to help you discover the perfect meal.</p>
                                        </li>
                                        <li>
                                            <h5 className="cb">Payment Options</h5>
                                            <p>Multiple payment gateways to ensure a hassle-free checkout experience.
                                            </p>
                                        </li>
                                        <li>
                                            <h5 className="cb">Promo Codes
                                            </h5>
                                            <p>Find exclusive discounts and offers with user-friendly promo codes.</p>
                                        </li>
                                        <li>
                                            <h5 className="cb">Re-Order
                                            </h5>
                                            <p>Quickly reorder past meals with a single tap, making dining convenient and familiar.
                                            </p>
                                        </li>
                                    </ul>

                                </p>
                            </Col>

                            <Col xs={12} md={4} className="mt-5">
                                <p className="mycard mx-3 lh-base text-start mt-3 h-100" >
                                    <h3 className="text-center mb-3">Admin Panel
                                    </h3>
                                    <ul>
                                        <li>
                                            <h5 className="cb">Customer Management
                                            </h5>
                                            <p>Efficient tools for managing customer profiles, preferences, and interactions.
                                            </p>
                                        </li>
                                        <li>
                                            <h5 className="cb">Ads Management
                                            </h5>
                                            <p>Easily create and manage advertisements to attract and retain customers.
                                            </p>
                                        </li>
                                        <li>
                                            <h5 className="cb">Analytics & Reports
                                            </h5>
                                            <p>
                                                Access comprehensive reports and analytics to optimize operations and improve sales.</p>                                        </li>
                                        <li>
                                            <h5 className="cb">Manage Restaurants
                                            </h5>
                                            <p>Seamlessly add, edit, or remove restaurant listings and menu options as needed.
                                            </p>                                        </li>
                                        <li>
                                            <h5 className="cb">Manage Delivery
                                            </h5>
                                            <p>Manage delivery assignments and monitor performance to guarantee timely service.
                                            </p>                                        </li>
                                    </ul>

                                </p>
                            </Col>
                            <Col xs={12} md={4} className="mt-5">
                                <p className="mycard mx-3 lh-base text-start mt-3 h-100" >
                                    <h3 className="text-center mb-3">Driver Panel
                                    </h3>
                                    <ul>
                                        <li>
                                            <h5 className="cb">Real-Time Requests
                                            </h5>
                                            <p>Receive instant notifications for new delivery requests, maximizing efficiency.
                                            </p>                                        </li>
                                        <li>
                                            <h5 className="cb">Profile Management
                                            </h5>
                                            <p>Update your profile information and preferences to enhance your delivery role.
                                            </p>                                        </li>
                                        <li>
                                            <h5 className="cb">View Earnings
                                            </h5>
                                            <p>Easy access to earnings reports and payment details to manage your finances.
                                            </p>
                                        </li>
                                        <li>
                                            <h5 className="cb">
                                                Availability Settings                                            </h5>
                                            <p>Set your availability to accept orders that fit your schedule, ensuring flexibility.
                                            </p>
                                        </li>
                                    </ul>

                                </p>
                            </Col>


                        </Row>
                    </div>
                    <Row className="d-flex align-items-stretch">
                        <h3 className="text-center mt-5 mb-3 cb">Our Food Delivery Software is Perfect for Everyone
                        </h3>
                        <p className="text-center">At Food Duke, we believe that our food delivery software is designed to cater to a diverse range of users,
                            ensuring an optimal experience for all.Here’s how our platform benefits everyone involved</p>
                        {food.map(service => (
                            <Col key={service.id} sm={12} md={6} lg={6} className="mb-3">
                                <div className="p-3 h-100">
                                    <div className="text-center border-blue p-3 sts h-100 d-flex flex-column justify-content-between">
                                        <div className="p-3">
                                            {service.icon}
                                        </div>
                                        <h6 className="cb">{service.title}</h6>
                                        <p className="text-justify">{service.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

            <AccordionSection faq={accord} />
            <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
                <Container className="px-lg-5 ">
                    <div>
                        <Row>
                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <p>
                                    <SiMongodb size={40} />
                                    <h4 className="mt-3">Order Management </h4>
                                </p>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center ">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">On-Time Delivery</h4>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">Reduced Operational Cost</h4>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">Professional Developers
                                </h4>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">Reach a Wider Audience
                                </h4>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">After Sales Support
                                </h4>
                            </Col>
                        </Row>
                    </div>
                    <div className="text-center ">
                        <h3 className="mt-5 mb-3">Testimonials  </h3>
                    <h2 className='Team-sub-title mb-4'>Our Clients Thoughts</h2>

                        <Container className='px-lg-5 F-innerDiv text-center'>
                <Carousel>
                    {testimonials.map((testimonial) => (
                        <Carousel.Item key={testimonial.id}>
                            < Row className='justify-content-md-center' >
                                <Col xs={12} lg={5} className='position-relative' >
                                    <div className="testimonial-item" style={{ background: "#0aac47" }}>
                                        <img src={"../"+testimonial.path} className='img-fluid client_img' alt="testimonial-img" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={5}>
                                    <div className="testimonial-item">
                                        <FaQuoteLeft className='quote_icon' />
                                        <p className='p-lh'>{testimonial.content}</p>
                                        <div>
                                            <h6>{testimonial.author}</h6 >
                                            <p className='prof'>{testimonial.profession}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))
                    }
                </Carousel>
            </Container>
                    </div>
                </Container>
            </Container>


            <ContactPopup />

            <Newsletter />



        </div>
    );
}


