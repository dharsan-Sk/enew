import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "../CSS/Service.css"
function AccordionSection(props) {
  return (
    <Container className="pb-5">
      <h3 className="text-center mb-3">Frequesntly Asked Questions</h3>
      <Row className="justify-content-md-center">
        
        <Col xs={10}>
          {props.faq.map((faq, key) => {
            return (
              <Accordion className="mt-3 " defaultActiveKey="0">
                <Accordion.Item eventKey={key}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default AccordionSection;
