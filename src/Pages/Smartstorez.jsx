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
import Smartstorezfeature from "../JSON/Smartstorezfeature.json"
import service from "../JSON/Smartstorezoffer";
import word from "../Images/newsletter.png"
import { Carousel } from 'react-bootstrap';
import { FaQuoteLeft } from "react-icons/fa";

import "../CSS/Section.css";
export default function Smartstorez() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const testimonials = [
        {
            id: 1,
            content: 'Smartstorez eCommerce software has completely transformed my sports equipment store! The platform is user-friendly and helps me manage my inventory effortlessly. The integration of product reviews has allowed my customers to make informed decisions, boosting my sales significantly. Highly recommend their services for any sports business!',
            author: 'Review by Rohit ',
            path: './assets/team-2.jpg'
        },
        {
            id: 2,
            content: 'Smartstorez eCommerce software for my online grocery store, and I could not be more satisfied.The platform simplifies everything from inventory management to seamless checkout. My customers love the easy navigation and fresh product listings. It truly a game-changer for grocery retailers looking to enhance their online presence!',
            author: 'Review by Preethi',
            path: './assets/team-1.jpg'
        },
        {
            id: 3,
            content: 'I approached Emergewiz to help me bring my app idea to life, and Im so glad I did.Their team of designers listened to my vision and translated it into a sleek and user- friendly interface that exceeded my expectations.The apps design has received rave reviews from users, and I credit that to the expertise and creativity of Emergewiz.',
            author: 'Review by Sibihiruthik',
            path: './assets/team-3.jpg'
        },
       
    ];
    

    let accord = [
        {
            question: " What differentiates Smartstorez from other eCommerce software providers?",
            answer: "Smartstorez stands out as an E-commerce app development company because of our commitment to providing customizable, scalable, and affordable solutions that cater to diverse business needs.",
        },
        {
            question: "Can I integrate third-party payment gateways?",
            answer: "Absolutely! Smartstorez supports integration with popular payment gateways to ensure secure and smooth transactions, reinforcing our status as a reliable E-commerce app development company.",
        },
        {
            question: "Is your software mobile-friendly?",
            answer: "Yes, our eCommerce software is optimized for both desktop and mobile devices, ensuring a seamless shopping experience for customers on any platform.",
        },
        {
            question: "What reporting features does your software include?",
            answer: "Our platform includes advanced reporting tools that allow you to monitor sales, track performance, and gain insights into customer behavior, which is crucial for business growth.",
        },
        {
            question: " Do you offer customization services?",
            answer: "Yes! Smartstorez provides customization options for our e-commerce software to meet the unique needs of your business, making us a preferred E-commerce app development company.",
        },

    ]
    console.log(accord)
    return (
        <div className="bg-white">
            <HeroSection option="Smartstorez" />
            <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
                <Container className="px-lg-5 ">
                    <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">

                        <div>
                            <Row>
                                <Col
                                    sm={12}
                                    md={12}
                                    lg={6} className="mt-3">
                                    <img src={word} alt="" className="w100" />
                                </Col>
                                <Col
                                    sm={12}
                                    md={12}
                                    lg={6} className="">
                                    <div className="mt-5">
                                        <h3 className="mt-3 ">  Ecommerce App Development Company</h3>
                                        <p className="text-justify p-3 mt-3 p-lh ">
                                            Welcome to Smartstorez! Our primary focus is to offer you high-quality and professional eCommerce software solutions. Business owners, whether they operate a start-up enterprise or an already established one, can benefit from our solutions that can run the online store business smoothly and at the lowest cost possible. At Smartstorez it is our mission to provide our clients with strong e-commerce software and systems regardless of their size. We bring in the aspect of naked essentials of the online business, which include products, taxes, inventory, and many others. Our company has been at the forefront in providing solutions for E-commerce apps for starters to compete in today’s complex marketplace environment.

                                        </p>
                                    </div>
                                </Col>

                            </Row>
                        </div>

                        <h3 className="Service-sub-title mt-5">
                            Why Choose Smartstorez?                         </h3>
                        <p className="mx-5 lh-base text-center mt-4">
                            As for our eCommerce software, it is much more than an application; it is a complex of interconnected mechanisms that are designed to provide users with the ultimate experience while improving the workflow. When it comes to features like product review, integrated shipping and much more, Smartstorez makes us your go-to E-commerce app development company.
                        </p>




                    </div>
                    <div className="text-center ">
                        <h3 className="mt-5 mb-5">Features of our E-commerce Software   </h3>
                        <Row className="g-4 equal-cols myweb text-start mb-5">
                            {Smartstorezfeature.map((service, index) => (
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
                            <h3 className="text-center ">Services for following industry verticals
                            </h3>
                            <p className="mt-5 p-lh">At Smartstorez, we serve different sectors in the economy since our software can handle any type of eCommerce business. We also argue that we can adapt our platform to the requirements of given sectors, which makes us the best E-commerce app development company. Here are some of the sectors we serve:

                            </p>
                            <Col xs={12} md={6} className="mt-5">
                                <p className="mycard mx-3 lh-base text-start mt-3 h-100" >
                                    <b className="cb">Fashion : </b>Deal with various types of clothing and accessories with the help of features such as categorization of products, banners, and customer feedback.
                                </p>
                            </Col>

                            <Col xs={12} md={6} className="mt-5">
                                <p className="mycard mx-3 lh-base text-start mt-3 h-100" >
                                    <b className="cb">Furniture : </b>Highlight your furniture products in detailed descriptions, great photos, and fast-tracking of orders.
                                </p>
                            </Col>
                            <Col xs={12} md={6} className="mt-5">
                                <p className="mycard mx-3 lh-base text-start mt-3 h-100" >
                                    <b className="cb">Sports : </b> To customers, organize sports products as comprehensively as possible and make sure that the customers can find them easily.</p>
                            </Col>

                            <Col xs={12} md={6} className="mt-5">
                                <p className="mycard mx-3 lh-base text-start mt-3 h-100" >
                                    <b className="cb">Hardware : </b>Manage your sales of tools and all types of hardware items easily through effective inventory and user management.
                                </p>
                            </Col>
                            <Col xs={12} md={6} className="mt-5">
                                <p className="mycard mx-3 lh-base text-start mt-3 h-100" >
                                    <b className="cb">Electronics : </b>Efficient stocking of electronic products so that the customers can access more details about the particular features and other comparisons.
                                </p>
                            </Col>
                            <Col xs={12} md={6} className="mt-5">
                                <p className="mycard mx-3 lh-base text-start mt-3 h-100" >
                                    <b className="cb">Meat : </b>Enable online meat selling with the functions of product newness, packing choices, and customers’ demands.
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <Row className="d-flex align-items-stretch">
                        <h3 className="text-center mt-5 mb-3 cb">What We Offer</h3>
                        {service.map(service => (
                            <Col key={service.id} sm={12} md={6} lg={3} className="mb-3">
                                <div className="p-3 h-100">
                                    <div className="text-center border-blue p-3 sts h-100 d-flex flex-column ">
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
            <Container className='px-lg-5 F-innerDiv text-center'>
                <h3 className="mb-3">Testimonials</h3>
                <h2 className='Team-sub-title mb-4'>Our Clients Thoughts</h2>

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
            <ContactPopup />
            <Newsletter />
        </div>
    );
}


