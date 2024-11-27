import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import CareerSection from "../Section/CareerSection";
import Myhelmet from "./Myhelmet";
import ContactPopup from "../Section/ContactPopup";
import HeroSection from "../Section/HeroSection";

function CareerPage() {
  const { pathname } = useLocation();

  // autoscroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://admin.Emergewiz.com/api/job_openings/")
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  let metas = {
    title: "Best Web Development Company in Coimbatore",
    describe: "Looking for the best web development company in Coimbatore? We deliver innovative, custom web solutions with a focus on quality and client satisfaction."
  }
  return (
    <div className="bg-white">
      <Myhelmet mymeta={metas} />
      <HeroSection option="Career" />

      <Container fluid="xxl" className="service-div py-5 wow fadeInUp">
        <Container className="px-lg-5 text-center">
          <Row  >
            <h3 >Jobs @ Emergewiz</h3>
            <p className="p-lh "> Provide your details, and we present you the right opportunity. <br />Submit your resume with us along with a cover letter to hr@Emergewiz.com</p>
          </Row>
          <Row className="g-4 equal-cols" >

            <h3 className=" text-center  project-page-heading mt-5">
              Current job openings
            </h3>
            {data ? (
              data.length > 0 ? (
                data.map((job) => {
                  if (job.status) {
                    return <CareerSection key={job.id} jobs={job} />;
                  }
                  return null; // Explicitly return null if the condition is not met
                })
              ) : (
                <p>No jobs available.</p> // Display this if the data array is empty
              )
            ) : (
              <p>Loading...</p> // Display this while data is loading
            )}

          </Row>
        </Container>
        <ContactPopup />
      </Container>
    </div>
  );
}

export default CareerPage;
